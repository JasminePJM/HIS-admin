<template>
<div id='patientInfo'>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px"  style="margin: 0; padding: 0;">
    <el-card>
      <h4>新建患者档案</h4>
      <el-form-item label="患者姓名:" prop="patname" required style="width: 33%; display: inline-block">
        <el-input v-model="ruleForm.name" placeholder="请输入患者姓名"></el-input>
      </el-form-item>
      <el-form-item label="患者来源:" prop="patregion" style="width: 33%; display: inline-block">
        <el-select v-model="ruleForm.patregion" placeholder="请选择" style="width: 49%; display: inline-block">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="深圳" value="shenzhen"></el-option>
          <el-option label="广州" value="guangzhou"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
        <el-input v-model="ruleForm.patregionjt" style="width: 49%; display: inline-block;"></el-input>
      </el-form-item>
      <el-form-item label="身份证号:" prop="patidentity" required style="width: 33%; display: inline-block;">
        <el-input v-model="ruleForm.identity" placeholder="请输入患者身份证号"></el-input>
      </el-form-item>
      <el-form-item label="患者性别:" prop="patsex" required style="width: 33%; display: inline-block;">
        <el-radio-group v-model="ruleForm.patsex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="患者生日:" required style="width: 33%; display: inline-block;">
          <el-form-item prop="patdate1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.patdate1" style="width: 100%;"></el-date-picker>
          </el-form-item>
      </el-form-item>
      <el-form-item label="联系方式:" prop="pattel" required style="width: 33%; display: inline-block;">
        <el-input v-model="ruleForm.pattel" placeholder="请输入患者手机号码"></el-input>
      </el-form-item>
      <el-form-item label="家庭住址:" style="width: 100%; display: block;">
        <el-select v-model="ruleForm.adrp" placeholder="请选择" style="width: 14%; display: inline-block;">
        <el-option label="广东省" value="gaungdong"></el-option>
        <el-option label="海南省" value="hainan"></el-option>
        <el-option label="江西省" value="jiangxi"></el-option>
        <el-option label="河北省" value="hebei"></el-option>
        <el-option label="湖南省" value="hunan"></el-option>
        <el-option label="青海省" value="qinghai"></el-option>
      </el-select>
      <el-select v-model="ruleForm.adrs" placeholder="请选择" style="width: 14%; display: inline-block;">
        <el-option label="广州市" value="gaungzhou"></el-option>
        <el-option label="揭阳市" value="jieyang"></el-option>
        <el-option label="潮州市" value="chaozhou"></el-option>
        <el-option label="湛江市" value="zhanjiang"></el-option>
        <el-option label="河源市" value="heyuan"></el-option>
        <el-option label="惠州市" value="huizhou"></el-option>
      </el-select>
      <el-input v-model="ruleForm.adrjt" placeholder="请输入详细地址信息" style="width: 71%; display: inline-block;"></el-input>
      </el-form-item>
      <h4>联系人信息</h4>
      <el-form-item label="姓名:" style="width: 33%; display: inline-block;">
        <el-input placeholder="请输入联系人姓名"></el-input>
      </el-form-item>
      <el-form-item label="联系方式:" style="width: 33%; display: inline-block;">
        <el-input placeholder="请输入联系人手机号码"></el-input>
      </el-form-item>
      <el-form-item label="关系:" style="width: 33%; display: inline-block;">
        <el-input placeholder="请输入联系人与患者的关系"></el-input>
      </el-form-item>
      <el-form-item prop="patAH" label="过敏史:" style="width: 39.5%; display: block;">
        <el-input v-model="patientDetailsAH.patAH"></el-input>
      </el-form-item>
        <el-form-item v-for="(domain, index) in patientDetailsAH.domains" :key="domain.key" :prop="'domains.' + index + '.value'">
        <el-input v-model="domain.value" style="width: 33.3%; display: inline-block;"></el-input>
        <el-button @click.prevent="removeDomain(domain)" style="border: none; color: #0086CD; display: inline-block;">
          <i class="el-icon-delete2"></i>
        </el-button>
        </el-form-item>
        <el-button @click="addDomain()" style="border: none; margin-left: 88px; color: #0086CD; display: block;">
        <i class="el-icon-plus"></i>
        <span>添加行</span>
        </el-button>
        <el-form-item label="附件:">
          <el-upload :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" style="margin-top: 0px;">
            <el-button class="patinfo-uploadbtn" style="margin-left: 0; padding-left: 0px;">上传文件</el-button>
          </el-upload>
        </el-form-item>
    </el-card>
      <el-button type="success" class="patinfo-submitbtn">提交</el-button>
    </el-form>
</div>
  
</template>

<script>
  export default {
    data() {
      return {
        patientDetailsAH: {
          domains: [{
            value: ''
          }],
          patAH: '',
        },
        ruleForm: {
          patname: '',
          patregion: '',
          patregionjt: '',
          patdate1: '',
          patsex: '',
          pattel: '',
          adrp: '',
          adrs: '',
          adrjt: '',
          linkername: '',
          linkertel: '',
          link: '',
          patAH: ''
        },
        rules: {
          patname: [
            { message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          // patregion: [
          //   { message: '请选择', trigger: 'change' }
          // ],
          patregionjt: [
            { message: '请补充', trigger: 'change' }
          ],
          patdate1: [
            { type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          patsex: [
            { message: '请选择患者性别', trigger: 'change' }
          ],
          adrp: [
            { message: '请选择', trigger: 'change' }
          ],
          adrs: [
            { message: '请选择', trigger: 'change' }
          ],
          adrjt: [
            { message: '请输入详细地址信息', trigger: 'change' }
          ],
          patsex: [
            { message: '请选择患者性别', trigger: 'change' }
          ],
          pattel: [
            { message: '请输入患者手机号码', trigger: 'blur' }
          ],
          linkername: [
            { message: '请输入联系人姓名', trigger: 'blur' }
          ],
          linkertel: [
            { message: '请输入联系人手机号码', trigger: 'blur' }
          ],
          link: [
            { message: '请输入联系人与患者的关系', trigger: 'blur' }
          ],
          patAH: [
	     	{ trigger: 'blur', trigger: 'blur,change' }
       	  ],
       	  domain: [
	      	{ message: '此处不能为空', trigger: 'blur'}
	   	  ]
        },
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({path: '/patientInfo'});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      removeDomain(item) {
        var index = this.patientDetailsAH.domains.indexOf(item)
        if (index !== -1) {
          this.patientDetailsAH.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.patientDetailsAH.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>

<style>
#patientInfo .patinfo-uploadbtn{
	border: none;
	color: #0086CD;
	margin-left: -15px;
}
#patientInfo .patinfo-submitbtn{
	float: right;
	margin-top: 10px;
}
</style>