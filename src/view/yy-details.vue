<template>
	<div id="yy-details" class="yyDetails">
		<el-row>
		  <!-- 个人信息 -->
		  <el-col :xs="8" :sm="6" :md="4" :lg="5">
		  	<div class="grid-content">
		  		<el-card class="box-card">
		  		  <img src="../assets/yy/1.png">
		  		  <p style="margin: 10px 0;color:#626868;"> {{ patientData.ptName }} </p>
		  		  <div class="ptSexAge">
					<div class="sex"><span> 性别：</span> {{ patientData.ptSex }} </div>
					<div class="age"><span> 年龄：</span> {{ patientData.ptAge }} </div>
					<div class="tel"><span style="margin-left: -29px;margin-right: 8px;"> 电话：</span> {{ patientData.ptTel }}</div>
		  		  </div>
		  		</el-card>
		  	</div>
		  </el-col>
		  <!-- 预约信息 -->
		  <el-col :xs="4" :sm="6" :md="16" :lg="18" style="margin-left: 25px;">
		  	<div class="grid-content">
		  		<div class="ptBook">
					<div class="ptTitle"> 预约信息 </div>
					<div class="ptCommon ptOrder"><span>订单号:</span>  {{ ptBooking.order }} </div>
					<div class="ptCommon ptOrderTime"><span>订单生成时间:</span> {{ ptBooking.orderTime }} </div>
					<div class="ptCommon ptBookChannel"><span>预约渠道:</span> {{ ptBooking.bookChannel }} </div>
					<div class="ptCommon ptSellChannel"><span>销售渠道:</span> {{ ptBooking.sellChannel }}  <span style="float: right;margin-right: 10px;color:#1296db;"><i class="icon-img icon-check"></i>查看报备</span> </div>
		  		</div>
		  	</div>
		  </el-col>
		  <!-- 最新测量信息 -->
		  <el-col :xs="8" :sm="6" :md="4" :lg="5">
		  	<div class="grid-content">
		  		<div class="ptBook" style="padding-bottom: 100px;">
					<div class="ptTitle"> 最新测量信息  <span @click="handleMeasure" style="float: right;margin-right: 10px;color:#1296db;cursor: pointer;"><i class="icon-img icon-edit"></i>编辑</span> </div>
					<div class="ptCommon ptOrder"><span>身高:</span>  <span v-model="ptHeight"> {{ ptHeight }}  </span> </div>
					<div class="ptCommon ptOrderTime"><span>体重:</span> <span v-model="ptWeight">{{ ptWeight }}</span> </div>
					<div class="ptCommon ptBookChannel"><span>体温:</span> <span v-model="ptTemp">{{ ptTemp }}</span> </div>
					<div class="ptCommon ptSellChannel"><span>血压:</span> <span v-model="ptBlood">{{ ptBlood }} </span> </div>
					<div class="ptCommon ptSellChannel"><span>心率:</span> <span v-model="ptHeartRate">{{ ptHeartRate }}</span> </div>
		  		</div>
		  	</div>
		  </el-col>
		  <!-- 问诊信息 -->
		  <el-col :xs="4" :sm="6" :md="16" :lg="18" style="margin-left: 25px;margin-top: 20px;">
		  	<div class="grid-content">
		  		<div class="ptBook" style="padding-bottom:90px;">
					<div class="ptTitle"> 问诊信息 </div>
					<div class="ptCommon ptOrder"><span>就诊时间:</span>  {{ patientData.ptTime }} </div>
					<div class="ptCommon ptOrderTime"><span>就诊类型:</span> {{ patientData.ptType }} </div>
					<div class="ptCommon ptBookChannel"><span>就诊医生:</span> {{ patientData.ptDoctor }} </div>
					<div class="ptCommon ptSellChannel"><span>主诉:</span> {{ patientData.ptComplain }} </div>
		  		</div>
		  		<div class="btnGroup">
		  			<el-button type="success" @click="handleTime">修改就诊时间</el-button>
		  			<el-button type="success" @click="handleDoctor">修改就诊医生</el-button>
		  			<el-button class="cancelBtn"><router-link to="/booking">取消预约</router-link></el-button>
		  		</div>
		  	</div>
		  </el-col>
		</el-row>
		
		<!-- 修改预约时间-弹窗 -->
		<el-dialog title="修改预约时间" :visible.sync="dialogTimeVisible">
		      <div class="ptChangeTime">
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">患者: </span> {{ patientData.ptName }}
		      		<span style="margin-left: 15px;"> {{ patientData.ptTime }} , {{ patientData.ptClock }} , 预约{{ patientData.ptDoctor }}  ( {{ patientData.ptDept }} ) </span>
		      	</div>
		      	<div>
		      		<span>修改预约时间: </span>
		      		<el-date-picker
		      		  v-model="value1"
		      		  type="date"
		      		  placeholder="2016-09-18"
		      		  :picker-options="pickerOptions0">
		      		</el-date-picker>
		      		<br>
		      		<el-radio class="radio" v-model="radio" type="success" label="1" style="margin-left: 100px;margin-top: 14px;" v-if="value1==''">无</el-radio>
		      		<el-radio class="radio" v-model="radio" type="success" label="2" style="margin-left: 100px;margin-top: 14px;" v-if="value1!=''">09:00 ~ 10:00</el-radio>
		      		<br>
		      		<el-radio class="radio" v-model="radio" type="success" label="3" style="margin-left: 100px;margin-top: 14px;" v-if="value1!=''">10:00 ~ 11:00</el-radio>
		      		<br>
		      		<el-radio class="radio" v-model="radio" type="success" label="4" style="margin-left: 100px;margin-top: 14px;" v-if="value1!=''">14:00 ~ 15:00</el-radio>
		      	</div>
		      </div>

		      <div slot="footer" class="dialog-footer">
		        <el-button @click="timeCancel">取 消</el-button>
		       
		        <el-button type="primary" @click="handleTimeSubmit">提 交</el-button>
		      </div>
		</el-dialog>

		<!-- 修改就诊医生-弹窗 -->
		<el-dialog title="修改就诊医生" :visible.sync="dialogDoctorVisible">
		      <div class="ptChangeTime">
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">患者: </span> {{ patientData.ptName }}
		      		<span style="margin-left: 15px;"> {{ patientData.ptTime }} , {{ patientData.ptClock }} , 预约{{ patientData.ptDoctor }}  ( {{ patientData.ptDept }} ) </span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span>修改预约医生: </span>
		      		<el-select v-model="value" placeholder="儿科" >
		      		  <el-option
		      		    v-for="item in options"
		      		    :key="item.value2"
		      		    :label="item.label2"
		      		    :value="item.value2">
		      		  </el-option>
		      		</el-select>
		      		<el-select v-model="value" placeholder="请选择" >
		      		  <el-option
		      		    v-for="item in doctorName"
		      		    :key="item.value"
		      		    :label="item.label"
		      		    :value="item.value">
		      		  </el-option>
		      		</el-select>
		      	</div>
		      	<div>
		      		<span>修改预约时间: </span>
		      		<el-date-picker
		      		  v-model="value1"
		      		  type="date"
		      		  placeholder="2016-09-18"
		      		  :picker-options="pickerOptions0">
		      		</el-date-picker>
		      		<br>
		      		<el-radio class="radio" v-model="radio" type="success" label="1" style="margin-left: 100px;margin-top: 14px;" v-if="value1==''">无</el-radio>
		      		<el-radio class="radio" v-model="radio" type="success" label="2" style="margin-left: 100px;margin-top: 14px;" v-if="value1!=''">09:00 ~ 10:00</el-radio>
		      		<br>
		      		<el-radio class="radio" v-model="radio" type="success" label="3" style="margin-left: 100px;margin-top: 14px;" v-if="value1!=''">10:00 ~ 11:00</el-radio>
		      		<br>
		      		<el-radio class="radio" v-model="radio" type="success" label="4" style="margin-left: 100px;margin-top: 14px;" v-if="value1!=''">14:00 ~ 15:00</el-radio>
		      	</div>
		      	
		      </div>

		      <div slot="footer" class="dialog-footer">
		        <el-button @click="dialogDoctorVisible = false">取 消</el-button>
		       
		        <el-button type="success" @click="handleDoctorSubmit">提 交</el-button>
		      </div>
		</el-dialog>

		<!-- 诊前测量-弹窗 -->
		<el-dialog title="诊前测量" :visible.sync="dialogMeasureVisible">
		      <div class="ptChangeTime">
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 25px;">患者: </span> {{ patientData.ptName }}
		      		<span style="margin-left: 15px;"> {{ patientData.ptTime }} , {{ patientData.ptClock }} , 预约{{ patientData.ptDoctor }}  ( {{ patientData.ptDept }} ) </span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">身高: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="ptHeight" placeholder="请输入"></el-input> <i class="measureUnit">cm</i> </span> 
		      		<span style="margin-left: 10px;">上一次结果为167cm</span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">体重: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="ptWeight" placeholder="请输入"></el-input> <i class="measureUnit">kg</i> </span>
		      		<span style="margin-left: 10px;">上一次结果为...</span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">体温: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="ptTemp" placeholder="请输入"></el-input> <i class="measureUnit">C</i> </span>
		      		<span style="margin-left: 10px;">上一次结果为...</span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">血压: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="ptBlood" placeholder="请输入"></el-input> <i class="measureUnit">mmhg</i> </span>
		      		<span style="margin-left: 10px;">上一次结果为...</span>
		      	</div>
		      	<div style="margin-bottom: 10px;">
		      		<span style="margin-right: 10px;">心率: </span> 
		      		<span style="margin-left: 15px;position: relative;"> <el-input v-model="ptHeartRate" placeholder="请输入"></el-input> <i class="measureUnit">次/分</i> </span>
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
	#yy-details{
/*		width: 80%;
		margin:0 auto;*/
		font-family: "微软雅黑";
		font-size: 14px;
	}
	ul{
	  list-style: none;
	  padding-left: 0px;
	}

	.yyDetails .box-card {
	    width: 100%;
	    font-size: 14px;
	    border-radius: 7px;
	}
	.yyDetails .el-card__body {
	    padding: 0;
	    text-align: center;
	    margin-top: 20px;
	}
	.yyDetails .ptSexAge{
		color: #626868;
	}
	.yyDetails .ptSexAge span{
		color: #BEBEBE;
	}
	.yyDetails .ptSexAge .sex{
		float: left;
		border-top: 1px solid #ECECEC;
		width: 49%;
		border-right: 1px solid #ECECEC;
		width: 50%;
		height: 40px;
		line-height: 40px;
	}
	.yyDetails .ptSexAge .age{
		float: left;
		border-top: 1px solid #ECECEC;
		width: 49%;
		line-height: 40px;
	}
	.yyDetails .ptSexAge .tel{
		clear: both;
		border-top: 1px solid #ECECEC;
		line-height: 40px;
	}
	.yyDetails .ptBook{
		text-align: left;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		border-radius: 7px;
		background: white;
	}
	.yyDetails .ptTitle{
		padding-left: 10px;
		border-bottom: 1px solid #F6F6F6;
		height: 40px;
		line-height: 40px;
	}
	.yyDetails .ptCommon{
		border-bottom: 1px solid #F6F6F6;
		height: 52px;
		line-height: 52px;
		padding-left: 10px;
		font-size: 14px;
		border-radius: 7px;
		color: #626868;
	}
	.yyDetails .ptCommon span{
		padding-right: 10px;
		color: #BCBCBC;
	}
	.yyDetails .btnGroup{
		text-align: center;
		margin-top: 10px;
	}
	.yyDetails .btnGroup .el-button{
		padding: 10px 8px;
		background:#21D180;
		color:white;
		letter-spacing:1px;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
	}
	.yyDetails .btnGroup .cancelBtn{
		background: #FFFFFF;
		color: #C2C2C2;
		border:none;
	}
	.yyDetails .cancelBtn:hover{
		color: #C2C2C2;
	}

	.yyDetails .text {
	  font-size: 14px;
	}

	.yyDetails .item {
	  padding: 18px 0;
	}

	.yyDetails .grid-content {
	  border-radius: 4px;
	}

	/*修改预约时间弹出框*/
	.yyDetails .el-dialog__header {
	    padding: 10px 20px;
	    background: #F4F5F9;
	    border-radius: 7px;
	}
	.yyDetails .el-dialog__header span{
		letter-spacing: 1px;
	}
	.yyDetails .el-dialog__body {
    	padding: 30px 20px 0;
	}
	.yyDetails .dialog-footer{
		text-align: center;
	}
	.yyDetails .dialog-footer button{
		background: #FFFFFF;
		color: #C2C2C2;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		padding: 9px 31px;
		border: 1px solid #E7E7E9;
	}
	.ptChangeTime span{
		color: #C1C1C1;
		letter-spacing: 1px;
	}
	.yyDetails .el-date-editor.el-input ,.yyDetails .el-select{
	    width: 130px;
	}
	.yyDetails .el-radio__input.is-checked .el-radio__inner {
	    border-color: #21D081;
	    background: #21D081;
	}
	.yyDetails .icon-img{
		background-repeat: no-repeat;
		background-size: 100% 100%;
		vertical-align: middle;
		position: relative;
		top: -2px;
		margin-right: 5px;
		display: inline-block;
		background-position: 0 0;
	}
	.yyDetails .icon-edit{
		width: 16px;
		height: 16px;
		background-image: url(../assets/yy/编辑.png);
	}
	.yyDetails .icon-check{
		width: 16px;
		height: 16px;
		background-image: url(../assets/yy/文档.png);
	}
	.yyDetails .el-input{
		width: 133px;
	}
	.yyDetails .el-input__inner{
		height:30px;
	}
	.yyDetails .measureUnit{
		position: absolute;
		top: 0;
		right: 6px;
    	color: #000;
    	font-style: normal;
	}
	.yyDetails .greenBtn{
		background: #21D180;
		color: #fff;
	}
</style>

<script>
    import { api } from '@/global/api.js'//引入静态资源
	import Vue from 'vue' 
	export default {
	    data() {
	      return {
	      	options: [{
	      	  value2: '选项1',
	      	  label2: '内科'
	      	}, {
	      	  value2: '选项2',
	      	  label2: '外科'
	      	}, {
	      	  value2: '选项3',
	      	  label2: '儿科'
	      	}, {
	      	  value2: '选项4',
	      	  label2: '五官科'
	      	}],
	      	value: '',
	      	doctorName: [{
	      	  value: '选项1',
	      	  label: '刘医生'
	      	}],
	        patientData: [{
	        	ptName: '',
	        	ptSex: '',
	        	ptAge:'',
	        	ptTel: '13012345678',
	        	ptTime: '',
	        	ptType: '',
	        	ptDoctor: '',
	        	ptComplain: '',
	        }],
	        ptBooking: [{
        		order: '',
        		orderTime: '',
        		bookChannel: '',
        		sellChannel: ''
        	}],
        	pickerOptions0: {
        	  disabledDate(time) {
        	    return time.getTime() < Date.now() - 8.64e7;
        	  }
        	},
        	dialogTimeVisible: false,
        	dialogDoctorVisible: false,
        	dialogMeasureVisible: false,
        	value1: '',
        	radio: '0',
        	Clock: 0,
        	input:'',
        	ptHeight:'-',
        	ptWeight:'-',
        	ptTemp:'-',
        	ptBlood:'-',
        	ptHeartRate:'-',
	      };
	    },
	    watch: {
	    	value1(curVal,oldVal){
	    		let re = this;
	    		if(curVal==''){
	    			re.patientData.ptTime = "2016-09-18";	
	    		}else{
	    			let year = new Date(curVal).getFullYear();
	    			let mon = new Date(curVal).getMonth()+1;
	    			if( mon < 10 ){
	    				mon = '0' + mon;
	    			}
	    			let day = new Date(curVal).getDate();
	    			if( day < 10 ){
	    				day = '0' + day;
	    			}
	    			curVal = year+'-'+mon+'-'+day;
	    			re.patientData.ptTime = curVal;		
	    		}

	    	},
	    	radio(curVal,oldVal){
	    		let re = this;
	    		if(curVal == 2){
	    			re.patientData.ptClock = "09:00 ~ 10:00"
	    		}
	    		if(curVal == 3){
	    			re.patientData.ptClock = "10:00 ~ 11:00"
	    		}
	    		if(curVal == 4){
	    			re.patientData.ptClock = "14:00 ~ 15:00"
	    		}
	    		// let re = this;
	    		// Vue.http.get('../static/json/yy-appointment.json').then(function(response){

	    		// 	re.patientData.ptClock = response.data.appointment.patientData[0].ptClock;
	    		// })	 
	    	}
	    	　　　　　　　　
	    },
	    methods: {
	    	// 读取json数据
	    	getData:function(){
	    		let re = this;
	    		Vue.http.get(api.appointment).then(function(response){
	    			re.patientData = response.data.appointment.patientData[0];
	    			re.ptBooking = response.data.appointment.patientData[0].ptBooking[0];
	    			re.doctorName = response.data.appointment.doctorName;
	    			// re.patientData.ptBooking = response.data.appointment.patientData.ptBooking[0];
	    			// console.log("哈哈哈",re.patientData.ptBooking[0].order)
	    			// console.log(re.patientData.ptTime)
	    		},function(){
	    			alert('申请失败！');
	    		})
	    	},
	    	//修改预约时间
	    	handleTime() {
	    	    this.dialogTimeVisible = true;
	    	},
	    	//修改预约医生
	    	handleDoctor() {
	    	    this.dialogDoctorVisible = true;
	    	},
	    	//诊前测量弹窗
	    	handleMeasure() {
	    	    this.dialogMeasureVisible = true;
	    	},
	    	//修改预约时间的提交
	    	handleTimeSubmit(){
	    		let re = this;
	    		Vue.http.get(api.appointment).then(function(response){
	    			response.data.appointment.patientData[0].ptTime = re.patientData.ptTime;
	    			response.data.appointment.patientData[0].ptClock = re.patientData.ptClock;
	    		})	 
	    	    
	    	    this.dialogTimeVisible = false;
	    	},
	    	//修改预约医生的提交
	    	handleDoctorSubmit(){
	    	    var vm = this;
	    	    console.log('新增入参：',vm.temp,vm.list)

	    	    //这里作演示用，正式新增 请提交到接口
	    	    vm.list.push(vm.temp)
	    	    console.log('新增后',vm.list)
	    	    
	    	    this.dialogDoctorVisible = false;
	    	},
	    	timeCancel(){
	    		this.dialogTimeVisible = false;
	    		let re = this;
	    		re.patientData.ptTime = "2016-09-18";
	    		this.value1 = '';
	    	},
	    	measureCancel(){
	    		this.dialogMeasureVisible = false;
	    	},
	    	changeClock(){
	    		// alert(111);
	    	},
	    	//诊前测量的提交
	    	handleMeasureSubmit(){
	    		let re = this;
	    		Vue.http.get(api.appointment).then(function(response){
	    			// response.data.appointment.patientData[0].ptTime = re.patientData.ptTime;
	    			// response.data.appointment.patientData[0].ptClock = re.patientData.ptClock;
	    		})	 
	    	    
	    	    this.dialogMeasureVisible = false;
	    	},

	    },
	    mounted: function (){
	    	var vm = this;
	    	vm.getData();
	    }
	}
</script>
