<template>
	<div id="yy-ptNewAppointment">
		<div class="newAppoint">
			<el-button type="success" size="mini">已建档</el-button><router-link to="/booking/newAppointFirst"><el-button size="mini" style="color: #21D081;border-radius: 0 4px 4px 0;border-color: #21D081;letter-spacing: 0.5px;">首诊</el-button></router-link>
			<br><br>
			<span>患者:</span>
		    <el-input v-model="input" class="patient" placeholder="请输入患者id/手机号/身份证号"></el-input>
		    <i class="el-icon-search stateIcon"></i>
		    <br><br>
		    <span>患者信息: — </span>
		</div>
		<div class="newAppoint" style="margin-top: 20px;padding: 16px 0;">
			<div class="newMessageTitle"> 
				<p>新增预约信息</p>
			</div>
			<div class="newMessage">
				<span>就诊类型:</span>
				<el-radio style="margin-left: 10px;" class="radio" v-model="radio" label="1" type="success">初诊</el-radio>
				<el-radio class="radio" v-model="radio" label="2" type="success">复诊</el-radio>
				<br><br>
				<span>预约科室:</span>
				<span style="margin-left: 10px;"> {{ patientData.ptDept }} </span>
				<br><br>
				<span>预约医生:</span>
				<span style="margin-left: 10px;"> {{ patientData.ptDoctor }} </span>
				<br><br>
				<span>预约时间:</span>
				<span style="margin-left: 10px;">2016年12月23日 上午  09:00~12:00</span>
				<br><br>
				<span>患者主诉:</span>
				<el-input style="margin-left: 10px;" v-model="input" type="textarea" :rows="2" placeholder="患者主诉描述,非必填"></el-input>
			</div>
			<div slot="footer" class="dialog-footer">
			  <el-button type="success" style="background: #21D180;color: #fff">登记</el-button>
			 
			  <router-link to="/booking"><el-button type="primary">取消</el-button></router-link>
			</div>
		</div>
	</div>
</template>

<style>
	ul{
		list-style: none;
		padding-left: 0px;
	}
	a{
		text-decoration: none;
	}
	#yy-ptNewAppointment{
		background: #F6F6F6;
		font-size: 16px;
		font-family: "微软雅黑";
	}
 	.newAppoint{
 		/*width: 100%;*/
 		text-align: left;
 		background: white;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		border-radius: 7px;
		padding: 16px;
		color:  #A0A0A0;
 	}
	.newAppoint .el-button+.el-button {
	     margin-left: 0px; 
	}
	.newAppoint .el-button--mini {
	    border-radius: 4px 0 0 4px;
	    padding: 10px;
	    width: 77px;
	}
	.newAppoint .el-button--mini:nth-child(2) {
		color: #21D081;
   		border-radius: 0 4px 4px 0;
	    border-color: #21D081;
	    letter-spacing: 0.5px;
	}
	.newAppoint .el-button--success {
	    /*background-color: #83b9eb;*/
	    /*border-color: #7CB9EF;*/
	    letter-spacing: 0.5px;
	    width: 85px;
	    padding: 10px;
	}
	.newAppoint .patient{
		display: inline;
	}
	.newAppoint .patient input{
		width: 22%;
	}
	.newAppoint .el-input, .el-input__inne {
	    margin-right: 12px;
	    margin-bottom: 12px;
	}
 	.newAppoint .stateIcon{
 		background: #22D185;
 		color: white;
 		padding: 6px;
	    border-radius: 4px;
	    box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
 	}
 	.newMessageTitle{
 		padding-bottom: 16px;
 		border-bottom: 1px solid #F1F1F1;
 	}
 	.newMessageTitle p{
 		color: #454545;
 		padding-left: 16px;
 	}
 	.newMessage{
 		color: #454545;
 		padding-left: 16px;
 		margin-top:16px;
 	}
 	#yy-ptNewAppointment .dialog-footer{
 		text-align: right;
	    padding-right: 3%;
	    margin-top: 2%;
 	}
 	#yy-ptNewAppointment .dialog-footer button{
		background: #FFFFFF;
		color: #C2C2C2;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		padding: 9px 31px;
		border: 1px solid #E7E7E9;
	}
	#yy-ptNewAppointment .el-date-editor.el-input ,#yy-ptNewAppointment .el-select{
	    width: 130px;
	}
	#yy-ptNewAppointment .el-radio__input.is-checked .el-radio__inner {
	    border-color: #21D081;
	    background: #21D081;
	}
	.newAppoint .el-textarea {
	    width: 91%;
	    vertical-align: top;
	}
</style>

<script>
    import { api } from '@/global/api.js'//引入静态资源
	import Vue from 'vue' 
	export default {
	    data() {
	      return {
	      	input:'',
	      	radio: '1',
	      	patientData: [{
	        	ptName: '',
	        	ptTime: '',
	        	ptType: '',
	        	ptDoctor: '',
	        }],
	      }        
		},
		methods: {
			// 读取json数据
			getData:function(){
				let re = this;
				Vue.http.get(api.appointment).then(function(response){
					re.patientData = response.data.appointment.patientData[0];
				},function(){
					alert('申请失败！');
				})
			},
		},
		mounted: function (){
			var vm = this;
			vm.getData();
		}
	}
</script>
