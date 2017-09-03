<template>
   <div id='jm-Person'>
     <el-row :gutter="20">
       <el-col :xs="4" :sm="4" :md="4" :lg="4">
         <div class="photo-left">
            <img src="../assets/image/113_90.png" width="100%" height="auto" style="margin-left:10px" @click='toggleShow'>
            <my-upload field="img"
                    @crop-success="cropSuccess"
                    @crop-upload-success="cropUploadSuccess"
                    @crop-upload-fail="cropUploadFail"
                    v-model="show"
                :width="300"
                :height="300"
                url="http://101.198.151.190/api/crop.php"
                :params="params"
                :headers="headers"
                img-format="png"></my-upload>
              <img :src="imgDataUrl">
            <p class="name">{{username}}</p>
            
         </div>
       </el-col>
       <el-col :xs="20" :sm="20" :md="20" :lg="20" >
          <div class="Personal">
            <div style="margin-bottom:10px">
              <span class="title">个人信息</span>
              <div class="edit">
                <el-button type="text" @click="PersonalEdit">
                    <i class="el-icon-edit"></i>
                    <span>编辑</span>
                </el-button>
              </div>
            </div>
            <table id='personal'>
              <tr>
                <td>姓名：{{username}} <span class="tag-career">{{personalInfo.type}}</span></td>
                <td>性别：{{personalInfo.sex}}</td>
              </tr>
              <tr>
                <td>年龄：{{computeYear()}}</td>
                <td>所属科室：{{personalInfo.department}}</td>
              </tr>
              <tr>
                <td>职称：{{personalInfo.leval}}</td>
                <td>电话：{{personalInfo.phone}}</td>
              </tr>
            </table>
          </div>
          <br>
          <div class="Personal">
            <div style="margin-bottom:10px">
              <span class="title">账号信息</span>
              <div class="edit">
                <el-button type="text" @click="AccountEdit">
                    <i class="el-icon-edit"></i>
                    <span>编辑</span>
                </el-button>
              </div>
            </div>
            <table id='personal'>
              <tr>
                <td>登录账号：{{accountInfo.account}}</td>
              </tr>
              <tr>
                <td>关联邮箱：{{accountInfo.email}}</td>
              </tr>
            </table>
        </div>
        <br>
        <div class="Personal">
          <div style="margin-bottom:10px">
            <span class="title">医生信息</span>
            <div class="edit">
                <el-button type="text" @click="doctorEdit">
                    <i class="el-icon-edit"></i>
                    <span>编辑</span>
                </el-button>
              </div>
          </div>
          <table id='doctorInfo'>
            <tr>
              <td>挂号类型：</td>
              <td>{{doctorInfo.type}}</td>
            </tr>
            <tr>
              <td>出诊科室：</td>
              <td>{{personalInfo.department}}</td>
            </tr>
            <tr>
              <td>擅长疾病：</td>
               <td>{{doctorInfo.goodat}}</td>
            </tr>
            <tr>
              <td>个人介绍：</td>
              <td>{{doctorInfo.intro}}</td>
            </tr>
          </table>
        </div>          
       </el-col>
     </el-row>
     <div>
      
    </div>
    <!-- 个人信息弹窗 -->
    <el-dialog title="编辑个人信息" :visible.sync="dialogFormVisible">
          <el-form class="small-space" :model="personalInfo" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
            <el-form-item label="用户类型">
              <span>{{personalInfo.type}}</span>
            </el-form-item>
            <el-form-item label="所属科室">
              <el-select v-model="personalInfo.department" placeholder="请选择活动区域">
              <el-option label="内科" value="内科" ></el-option>
              <el-option label="儿科" value="儿科" ></el-option>              
              <el-option label="妇科" value="妇科" ></el-option>
              <el-option label="眼科" value="眼科" ></el-option>
              <el-option label="神经外科" value="神经外科" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="姓名">
              <el-input v-model="username"></el-input>
            </el-form-item>

            <el-form-item label="性别">
              <el-radio class="radio" v-model="personalInfo.sex" label="男">男</el-radio>
              <el-radio class="radio" v-model="personalInfo.sex" label="女">女</el-radio>
            </el-form-item>

           <el-form-item label="生日日期">
                 <el-date-picker type="date" placeholder="选择日期" v-model="personalInfo.birthday" style="width: 100%;" @change="ChangeBirthday()"></el-date-picker>
           </el-form-item>
           
           <el-form-item label="电话">
             <el-input v-model="personalInfo.phone"></el-input>
           </el-form-item>

           <el-form-item label="职称">
             <el-input v-model="personalInfo.leval"></el-input>
           </el-form-item>

           <el-form-item label="备注">
             <el-input type="textarea" :rows="4" v-model="personalInfo.backup"></el-input>
           </el-form-item>
          </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
           
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
    </el-dialog>
    <!-- 账号信息弹窗 -->
    <el-dialog title="绑定邮箱" :visible.sync="dialogFormVisible2">
          <el-form class="small-space" :model="accountInfo" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
            <el-form-item label="绑定状态">
              <span>{{ChangeEmail()}}</span>
            </el-form-item>

            <el-form-item
               prop="email"
               label="邮箱"
               :rules="[
                 { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                 { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
               ]"
             >
               <el-input v-model="accountInfo.email"></el-input>
             </el-form-item>
           </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
           
            <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
          </div>
    </el-dialog>
    <!-- 医生信息 -->
    <el-dialog title="编辑医生信息" :visible.sync="dialogFormVisible3">
          <el-form class="small-space" :model="personalInfo" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>

              <el-form-item label="姓名">
                <el-input v-model="personalInfo.name"></el-input>
              </el-form-item>

              <el-form-item label="挂号类型">
                <el-select v-model="doctorInfo.type" placeholder="请选择活动区域">
                <el-option label="普通挂号" value="普通挂号" ></el-option>
                <el-option label="VIP挂号" value="VIP挂号" ></el-option>              
                </el-select>
              </el-form-item>
              <el-form-item label="擅长疾病">
                <el-input v-model="doctorInfo.goodat"></el-input>
              </el-form-item>

              <el-form-item label="个人介绍">
                <el-input type="textarea" :rows="6" v-model="doctorInfo.intro"></el-input>
              </el-form-item>
           </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible3 = false">取 消</el-button>
           
            <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
          </div>
    </el-dialog>
   </div>
</template>
<script>
import { api } from '@/global/api.js'//引入静态资源
import Vue from 'vue';
import myUpload from 'vue-image-crop-upload/upload-2.vue';
  export default{
    components: {
      'my-upload': myUpload
    },
    data:function(){
      return{
          dialogFormVisible:false,
          dialogFormVisible2:false,
          dialogFormVisible3:false,
          show: false,
          username:"",
          params: {
            token: '123456798',
            name: 'avatar'
          },
          headers: {
            smail: '*_~'
          },
          imgDataUrl: '' ,
          personalInfo:
              {
                type:"",
                department:"",
                name:null,
                sex:"",
                birthday:"",
                phone:"",
                leval:"",
                backup:""
              }
          ,
          accountInfo:
              {
                account:"",
                email:"",
                newEmail:""
              }
          ,
          doctorInfo:
              {
                name:"",
                type:"",
                department:"",
                goodat:"",
                intro:""
              } 
      }
    },
    methods:{
      //lxy
      getLoginData(){
        let current = JSON.parse(window.sessionStorage.getItem("Info"));
        this.username=current.userName;
      },
      getData:function(){
        let data=this;
        Vue.http.get(api.personalInto).then(function(respone){
             data.personalInfo=respone.data.personalInfo;
             data.accountInfo=respone.data.accountInfo;
             data.doctorInfo=respone.data.doctorInfo;
         })
      },
      ChangeBirthday(){
        var Y=new Date(this.personalInfo.birthday).getFullYear();
        var M=new Date(this.personalInfo.birthday).getMonth()+1;
        var D=new Date(this.personalInfo.birthday).getDate();
        var birthString=Y+'-'+M+'-'+D;
        console.log('lalalal',birthString);
        this.personalInfo.birthday=birthString;
      },
      ChangeEmail(){
         let email=this.accountInfo.email;
         var changeEmail;
         if(email==''){
          changeEmail='未绑定';
         }else{
          changeEmail='已绑定';
         }
         return changeEmail;
      },
      PersonalEdit() {
        this.dialogFormVisible=true;
      },
      AccountEdit() {
        this.dialogFormVisible2=true;
      },
      doctorEdit() {
        this.dialogFormVisible3=true;
      },
      ChangePhoto(){
        this.ChangePart=false;
      },
      toggleShow() {
        this.show = !this.show;
      },
      computeYear(){         
          var returnAge;  
          var birth=this.personalInfo.birthday;
          console.log('=======111',birth);
          if( birth && birth.toString().indexOf('-') === -1 ){
            //假如日期格式不是2017-8-3这种形式，则进行转日期格式
            this.ChangeBirthday();
            // console.log('非格式日期格式！');
          }
          // Wed Aug 16 1978 00:00:00 GMT+0800 (中国标准时间)没办法进行切割
          // 需要转出2017-8-3
          var strBirthdayArr=birth.toString().split("-"); 
          var birthYear = strBirthdayArr[0];  
          var birthMonth = strBirthdayArr[1];  
          var birthDay = strBirthdayArr[2];  
            
          var d = new Date();  
          var nowYear = d.getFullYear();  
          var nowMonth = d.getMonth() + 1;  
          var nowDay = d.getDate();  
            
          if(nowYear == birthYear){  
              returnAge = 0;//同年 则为0岁  
          }  
          else{  
              var ageDiff = nowYear - birthYear ; //年之差  
              if(ageDiff > 0){  
                  if(nowMonth == birthMonth) {  
                      var dayDiff = nowDay - birthDay;//日之差  
                      if(dayDiff < 0)  
                      {  
                          returnAge = ageDiff - 1;  
                      }  
                      else  
                      {  
                          returnAge = ageDiff ;  
                      }  
                  }  
                  else  
                  {  
                      var monthDiff = nowMonth - birthMonth;//月之差  
                      if(monthDiff < 0)  
                      {  
                          returnAge = ageDiff - 1;  
                      }  
                      else  
                      {  
                          returnAge = ageDiff ;  
                      }  
                  }  
              }  
              else  
              {  
                  returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天  
              }  
          }  
            
          // this.yearOld=returnAge;//返回周岁年龄 
          return returnAge;  

      }


      
      
    },
    mounted(){
      
      this.getData();
      this.ChangeEmail();
      this.getLoginData();
      // this.ChangeBirthday();
      
    },
    events: {
      /**
       * crop success
       *
       * [param] imgDataUrl
       * [param] field
       */
      cropSuccess(imgDataUrl, field){
        console.log('-------- crop success --------');
        this.imgDataUrl = imgDataUrl;
      },
      /**
       * upload success
       *
       * [param] jsonData   server api return data, already json encode
       * [param] field
       */
      cropUploadSuccess(jsonData, field){
        console.log('-------- upload success --------');
        console.log(jsonData);
        console.log('field: ' + field);
      },
      /**
       * upload fail
       *
       * [param] status    server api return error status, like 500
       * [param] field
       */
      cropUploadFail(status, field){
        console.log('-------- upload fail --------');
        console.log(status);
        console.log('field: ' + field);
      }
    }
  }
</script>
<style>
#jm-Person{
  background-color: white;
}
#jm-Person .cancle-btn{
  color: #bbb;
  box-shadow: 1px 1px 8px #ccc;
  border: 1px solid #fff;
  background-color: #fff;
  width: 60px;
  height: 30px;
  margin-right: 15px;
  border-radius: 5px;
}
#jm-Person .keep-btn{
  color: #fff;
  box-shadow: 1px 1px 8px #ccc;
  border: 1px solid #21D081;
  background-color: #21D081;
  width: 60px;
  height: 30px;
  border-radius: 5px;
}
#jm-Person .photo-left{
   width: 65%;
   height: auto;
   /*border: 1px solid #333;*/
}
#jm-Person .name{
  margin-top: 15px;
  margin-left: 23px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
}
#jm-Person .Head-photo{
  background-image: url(../assets/image/113_90.png);
  width: 100%;
  height: 90px;
  background-repeat: no-repeat;
  background-size: 90px 90px;
  /*padding: 20px*/
  /*border: 1px solid #333;*/
  margin:20px 23px;
}
#jm-Person .Personal{
  width: 93%;
  height: auto;
  /*border: 1px solid #333;*/
  padding: 12px 20px;
  box-shadow: 1px 2px 8px #ccc;
}
#jm-Person .photoPart{
  width: 93%;
  height: auto;
  /*border: 1px solid #333;*/
  padding: 12px 20px;
  box-shadow: 1px 2px 8px #ccc;
}

#jm-Person .title{
  font-size: 17px;
  letter-spacing: 1px;

}
#jm-Person .edit{
  display: inline-block;
  float: right;
  font-size: 15px;
  color: #50bfff;
}
#jm-Person #personal{
  padding:0 !important;
  color:#a7a7a7;
}
#jm-Person #personal tr{
  height: 40px;
 }
#jm-Person #personal td{
   width: 280px;
   /*border:1px solid #000;*/
 }
#jm-Person .tag-career{
  background-color:#EDAC01;
  width: 48px;
  height: 14px;
  padding-top:2px;
  padding-bottom: 5px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  margin-left: 5px;
}
#jm-Person #doctorInfo{
  color:#a7a7a7;
}
#jm-Person #doctorInfo tr{
  height: 40px;
}
#jm-Person #doctorInfo td:nth-child(1){
  width: 80px;
}

</style>