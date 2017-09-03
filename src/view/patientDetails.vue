<template>
<div id='patientDetails'>
  <div class="left">
		<el-card class="lt-card">
			<div style="width: 110px;">
				<img src="../assets/image/29.png">
				<p style="text-align: center;">{{current.patname}}</p>
				<p style="text-align: center;">id:{{current.patid}}</p>
			</div>
      <div style="float: left; margin-left: 130px; margin-top: -130px;">
        <p class="pd-lt-p" style="margin-top: -5px;">
        性别:<span class="pd-lt-span">{{current.patsex}}</span>
        年龄:<span class="pd-lt-span">{{current.patage}}</span>
        </p>
        <p class="pd-lt-p">电话:<span class="pd-lt-span">{{current.pattel}}</span></p>
        <p class="pd-lt-p">身份证号:<span class="pd-lt-span">{{current.patidentity}}</span></p>
        <p class="pd-lt-p" style="margin-bottom: 20px;">家庭住址:<span class="pd-lt-span">{{current.patadr}}</span></p>
      </div>
		</el-card>
		<el-card class="lb-card">
      <h4>就诊记录</h4>
      <p class="pd-lt-p" v-for="r in record">
        <span class="pd-lb-span">{{r.date}}</span>
        <span class="pd-lb-span">{{r.time}}</span>
        <span class="pd-lb-span">{{r.doctor}}</span>
        <span class="pd-lb-span">{{r.visit}}</span>
        <span class="pd-lb-span">{{r.situ}}</span>
        <el-button style="color: #0086CD; border: none; display: inline-block;">
          <i class="el-icon-document"></i>
          <span>详情</span>
        </el-button>
      </p>
      <div class="block">
        <el-pagination
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="sizes, prev, pager, next, jumper"
          :total="200">
        </el-pagination>
      </div>
		</el-card>
  </div>
  <div class="right">
  	<el-card class="rt-card">
      <h4>联系人信息</h4>
        <p class="pd-lt-p">姓名:<span class="pd-lt-span">{{current.linkname}}</span></p>
        <p class="pd-lt-p">电话:<span class="pd-lt-span">{{current.linktel}}</span></p>
        <p class="pd-lt-p">关系:<span class="pd-lt-span">{{current.linkrelative}}</span></p>
  	</el-card>
  	<el-card class="rc-card">
      <h4>药物过敏史</h4>
      <p class="pd-lt-p">{{current.patAH}}</p>
  	</el-card>
  	<el-card class="rb-card">
      <h4>测量信息</h4>
      <el-button style="border: none; float: right; color: #0086CD; margin-top: -25px;">
        <i class="el-icon-edit"></i>
        <span>编辑</span>
      </el-button>
      <p class="pd-lt-p">身高:<i class="el-icon-minus" style="float: right; margin-right: 15px;"></i></p>
      <p class="pd-lt-p">体重:<i class="el-icon-minus" style="float: right; margin-right: 15px;"></i></p>
      <p class="pd-lt-p">体温:</p>
  	</el-card>
  </div>
</div>
</template>

<script>
import { api } from '@/global/api.js'//引入静态资源
export default {
  data: function () {
    return {
      current: "",
      list:[],
      record:[]
    }
    
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList() {
      this.$http.get(api.patientDetails).then(function(res){
        // this.$message('Hello, welcome to my world.');
        this.current = res.data[0];
        this.record = res.data[0].record;
        // console.log(this.current);
        // console.log(this.record);
      }, function(res){
        this.$message("The Request is Failed.");
      })
    }
  }
}
</script>

<style>
#patientDetails .left{
  width: 68%;
  float: left;
}
#patientDetails .right{
  width: 30%;
  float: left;
}
#patientDetails .lt-card{
  width:  100%;
  display: inline-block;
  float: left;
}
#patientDetails .pd-lt-p{
  margin-top: 30px;
  color: #C6C6C6;
}
#patientDetails .pd-lt-span{
  color: #7F8787;
  margin-left: 8px;
}
#patientDetails .lb-card{
  width: 100%;
  display: inline-block;
  margin-top: 5px;
}
#patientDetails .pd-lb-span{
  color: #7F8787;
  margin-right: 5px;
}
#patientDetails .rt-card{
  display: inline-block;
  width: 100%;
  margin-left: 2%;
}
#patientDetails .rc-card{
  width: 100%;
  margin-top: 5px;
  margin-left: 2%;
}
#patientDetails .rb-card{
  margin-top: 5px;
  width: 100%;
  margin-left: 2%;
}
</style>