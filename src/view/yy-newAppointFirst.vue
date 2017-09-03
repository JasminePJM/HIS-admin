<template>
	<div id="yy-ptNewAppointmentFirst">
		<div class="newAppointFirst">
			<router-link to="/booking/newAppoint"><el-button size="mini" style="color: #21D081;border-color: #21D081;letter-spacing: 0.5px;border-radius: 4px 0 0 4px;">已建档</el-button></router-link><el-button size="mini" type="success">首诊</el-button>
			<br><br>
			<span>患者姓名:</span>
		    <el-input  style="margin-left: 10px;" v-model="input" class="patient" placeholder="请输入患者姓名"></el-input>
		    <span style="margin-left: 40px;">患者性别:</span>
		    <el-radio class="radio" v-model="radio" label="1" type="success">男</el-radio>
		    <el-radio class="radio" v-model="radio" label="2" type="success">女</el-radio>
		    <br><br>
		    <span>患者年龄:</span>
	    	<el-date-picker  style="margin-left: 10px;"
	          v-model="value6"
	          type="daterange"
	          placeholder="请输入年龄">
	        </el-date-picker>
	        <span style="margin-left: 40px;">联系方式:</span>
	        <el-input v-model="input" class="patientDatas" placeholder="请输入患者手机"></el-input>
		    <p style="margin-bottom: 10px;margin-left: 83px;font-size: 14px;letter-spacing: 1px;">系统将自动建档，稍后可为患者补全信息</p>
		    <div>
			    <span>患者来源:</span>
			    <el-select   style="margin-left: 10px;" v-model="value" placeholder="请选择" >
			      <el-option
			        v-for="item in options"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value">
			      </el-option>
			    </el-select>
			    <el-input v-model="input" class="patientDatas" placeholder=""></el-input>
			    <span style="float: right;margin-right: 510px;color:#1296db;"><i class="icon-img icon-pic"></i>报备匹配</span>
		    </div>

		    

		</div>
		<div class="newAppointFirst" style="margin-top: 20px;padding: 16px 0;">
			<div class="newMessageTitle"> 
				<p>新增预约信息</p>
			</div>
			<div class="newMessage">
				<span>就诊类型:</span>
				<span style="margin-left: 10px;">初诊</span>
				<br><br>
				<span>预约科室:</span>
				<span style="margin-left: 10px;"> {{ patientData.ptDept }} </span>
				<br><br>
				<span>预约医生:</span>
				<span style="margin-left: 10px;"> {{ patientData.ptDoctor }} </span>
				<br><br>
				<span>预约时间:</span>
				<span style="margin-left: 10px;">2016年12月23日  09:00~12:00</span>
				<br><br>
				<span>患者主诉:</span>
				<el-input style="margin-left: 10px;" v-model="input" type="textarea" :rows="2" placeholder="患者主诉描述,非必填"></el-input>
			</div>
		</div>
		<div slot="footer" class="dialog-footer">
		  <el-button type="success" style="background: #21D180;color: #fff;border:none;">登记</el-button>
		 
		  <router-link to="/booking"><el-button type="primary">取消</el-button></router-link>
		</div>

		<!-- 报备匹配-弹窗 -->
		<el-dialog title="诊前测量" :visible.sync="dialogMeasureVisible">
		      <div class="ptChangeTime">
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 25px;">患者: </span> {{ patientData.ptName }}
		      		<span style="margin-left: 15px;"> {{ patientData.ptTime }} , {{ patientData.ptClock }} , 预约{{ patientData.ptDoctor }}  ( {{ patientData.ptDept }} ) </span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">身高: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="input" placeholder="请输入"></el-input> <i class="measureUnit">cm</i> </span> 
		      		<span style="margin-left: 10px;">上一次结果为167cm</span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">体重: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="input" placeholder="请输入"></el-input> <i class="measureUnit">kg</i> </span>
		      		<span style="margin-left: 10px;">上一次结果为...</span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">体温: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="input" placeholder="请输入"></el-input> <i class="measureUnit">C</i> </span>
		      		<span style="margin-left: 10px;">上一次结果为...</span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">血压: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="input" placeholder="请输入"></el-input> <i class="measureUnit">mmhg</i> </span>
		      		<span style="margin-left: 10px;">上一次结果为...</span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">心率: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="input" placeholder="请输入"></el-input> <i class="measureUnit">次/分</i> </span>
		      		<span style="margin-left: 10px;">上一次结果为...</span>
		      	</div>
		      </div>

		      <div slot="footer" class="dialog-footer">

		      	<el-button type="success" @click="handleMeasureSubmit" style="background: #21D180;color: #fff">提 交</el-button>

		        <el-button @click="measureCancel">取 消</el-button>

		      </div>
		</el-dialog>
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
	#yy-ptNewAppointmentFirst{
		background: #F6F6F6;
		font-size: 16px;
		font-family: "微软雅黑";
	}
 	.newAppointFirst{
 		/*width: 100%;*/
 		text-align: left;
 		background: white;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		border-radius: 7px;
		padding: 16px;
		color:  #A0A0A0;
 	}
	.newAppointFirst .el-button+.el-button {
	     margin-left: 0px; 
	}
	.newAppointFirst .el-button--mini {
	    
	    padding: 10px;
	    width: 77px;
   		border-radius: 0 4px 4px 0;
	}
	.newAppointFirst .el-button--mini:nth-child(1) {
		color: #21D081;
	    border-color: #21D081;
	    letter-spacing: 0.5px;
	    border-radius: 4px 0 0 4px;
	}
	.newAppointFirst .el-button--success {
	    /*background-color: #83b9eb;*/
	    /*border-color: #7CB9EF;*/
	    letter-spacing: 0.5px;
	    width: 85px;
	    padding: 10px;
	}
	.newAppointFirst .patient,.newAppointFirst .patientDatas{
		display: inline;
	}
	.newAppointFirst .patient input{
		width: 130px;
	}
	.newAppointFirst .patientDatas input{
		width: 22%;
	}
	.newAppointFirst .el-input, .el-input__inne {
	    margin-right: 12px;
	    margin-bottom: 12px;
	}
 	.newAppointFirst .stateIcon{
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
 	.newAppointFirst .newMessage{
 		color: #elelel;
 		padding-left: 16px;
 		margin-top:16px;
 	}
 	#yy-ptNewAppointmentFirst .dialog-footer{
 		text-align: right;
	    padding-right: 3%;
	    margin-top: 2%;
 	}
 	#yy-ptNewAppointmentFirst .dialog-footer button{
		background: #FFFFFF;
		color: #C2C2C2;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		padding: 9px 31px;
		border: 1px solid #E7E7E9;
	}
	#yy-ptNewAppointmentFirst .el-date-editor.el-input ,#yy-ptNewAppointmentFirst .el-select{
	    width: 130px;
	}
	#yy-ptNewAppointmentFirst .el-radio__input.is-checked .el-radio__inner {
	    border-color: #21D081;
	    background: #21D081;
	}
	.newAppointFirst .el-textarea {
	    width: 91%;
	    vertical-align: top;
	}
	.newAppointFirst .icon-img{
		background-repeat: no-repeat;
		background-size: 100% 100%;
		vertical-align: middle;
		position: relative;
		top: -2px;
		margin-right: 5px;
		display: inline-block;
		background-position: 0 0;
	}
	.newAppointFirst .icon-pic{
	    width: 30px;
	    height: 20px;
		background-size: 59% 83%; 
		background-position: 7px 3px;
		background-image: url(../assets/yy/拼图.png);
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
	      	value6: '',
	      	value:'',
	      	patientData: [{
	        	ptName: '',
	        	ptTime: '',
	        	ptType: '',
	        	ptDoctor: '',
	        }],
	        options: [{
	          value: '选项1',
	          label: '内科'
	        }, {
	          value: '选项2',
	          label: '外科'
	        }, {
	          value: '选项3',
	          label: '妇儿科'
	        }, {
	          value: '选项4',
	          label: '五官科'
	        }, {
	          value: '选项5',
	          label: '医技科室'
	        }]
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
