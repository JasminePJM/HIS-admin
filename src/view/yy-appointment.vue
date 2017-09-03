<template>
	<div id="yy-appointment">
		<el-tabs v-model="activeName" class="yy-tabs" @tab-click="handleClick">
		  <el-tab-pane label="今日预约" name="first">
		  	<!-- 全部科室 -->
		  	<div class="yy-section">
		  		<el-select v-model="value" placeholder="全部科室" >
		  		  <el-option
		  		    v-for="item in options"
		  		    :key="item.value"
		  		    :label="item.label"
		  		    :value="item.value">
		  		  </el-option>
		  		</el-select>
		  		<ul>
		  			<li><a href="">出诊医生</a></li>
		  			<li><a href="">刘医生</a></li>
		  			<li><a href="">刘医生</a></li>
		  			<li><a href="">张医生</a></li>
		  			<li><a href="">李医生</a></li>
		  		</ul>
		  	</div>
		  	<!-- 某个医生 -->
		  	<div class="yy-doctor">
		  		<div class="doctorTime">
		  			<span style="margin-right: 11px">{{ doctorData.Drname }} </span>
		  			<el-button type="primary" size="mini">{{ doctorData.state }}</el-button><el-button size="mini">{{ doctorData.date }}</el-button>
		  		</div>
		  		<div class="doctorList">
		  			<el-table :data="tableData" border style="width: 100%">
		  			  <el-table-column label="刘医生" width="180">
		  			    <template scope="scope">
		  			    	<div style="text-align: left;padding-left: 10px;">
		  			    		<span style="margin-left: -10px">{{ scope.row.date }}</span>
		  			    	</div>
		  			      
		  			    </template>
		  			  </el-table-column>
		  			  <el-table-column label="姓名" width="180">
		  			    <template scope="scope">
		  			      <div style="display: inline-block;text-align: left;width: 100%">
		  			      	<span style="margin-left: -7px;line-height: 24px;">{{ scope.row.yourName }}</span> 
		  			      	<br> 
		  				  	<span style="margin-left: -10px;" v-if="scope.row.appoint==1||scope.row.tag==1">{{ scope.row.tel }}</span>
		  			      </div>
		  			      
		  			    </template>
		  			  </el-table-column>
		  			  <el-table-column label="操作">
		  			    <template scope="scope">
		  			    	<div class="cell cell-blue" v-if="scope.row.appoint==1||scope.row.tag==1">
	  			    			<span class="el-tag" style="margin-right: 140px;color: white" v-if="scope.row.appoint==1">就诊中<!----></span>
	  			    			<i class="el-icon-time" v-if="scope.row.appoint==0"></i>
	  			    			<span v-if="scope.row.appoint==0" style="padding-right: 10px;">签到</span>
				  				<i class="el-icon-time" v-if="scope.row.appoint==1" style="color:#ACACAC;"></i>
		  						<span v-if="scope.row.appoint==1" style="color:#ACACAC;padding-right: 10px;">签到</span>
		  						<i class="el-icon-edit"></i>
		  						<span style="padding-right: 10px;">测量</span>
		  						<i class="el-icon-document"></i>
		  						<span style="padding-right: 10px;"><router-link to="/booking/details">详情</router-link></span>
		  						<i class="el-icon-close"></i>
		  						<span>取消</span>
		  			    	</div>
		  			    	<div class="cell cell-blue" v-if="scope.row.tag==0">
				  				<i class="el-icon-document"></i>
				  				<span>登记</span>
			  				</div>
		  			    </template>
		  			  </el-table-column>
		  			</el-table>
		  		</div>
		  	</div>
		  </el-tab-pane>

		  <el-tab-pane label="所有预约" name="second">
			<div class="allAppoint">
				<span>就诊时间:</span>
				<el-date-picker
			      v-model="value6"
			      type="daterange"
			      placeholder="20160902 ~ 20160913">
			    </el-date-picker>
			    <span>患者:</span>
			    <el-input v-model="input" class="patient" placeholder="请输入患者姓名"></el-input>
			    <span>科室:</span>
			    <el-select v-model="value" placeholder="全部科室" >
			      <el-option
			        v-for="item in options"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value">
			      </el-option>
			     </el-select>
			    <span>医生:</span>
			    <el-select v-model="value" placeholder="请选择" >
			      <el-option
			        v-for="item in doctorName"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value">
			      </el-option>
			    </el-select>
			    <br>
			    <span>就诊状态:</span>
			    <el-select v-model="value" placeholder="请选择" >
			      <el-option
			        v-for="item in doctorState"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value">
			      </el-option>
			    </el-select>
			    <i class="el-icon-search stateIcon"></i>
			</div>
			<div class="allAppointList">
				<el-table :data="allAppointData" border style="width: 100%">
					<el-table-column class="allALnum" type="index" width="70" label="序号">
					</el-table-column>
				    <el-table-column label="预约就诊时间">
				      <template scope="scope">
				        <div style="display: inline-block;text-align: left;width: 100%">
		  			      	<span>{{ scope.row.yourDate }}</span> 
		  			      	<br> 
		  				  	<span>{{ scope.row.yourTime }}</span>
		  			     </div>
				      </template>
				    </el-table-column>
				    <el-table-column label="患者姓名">
				      <template scope="scope">
				         <div style="display: inline-block;text-align: left;width: 100%">
		  			      	<span style="">{{ scope.row.yourName }}, {{ scope.row.yourSex }} </span> 
		  			      	<br> 
		  				  	<span>{{ scope.row.yourTel }}</span>
		  			     </div>
				      </template>
				    </el-table-column>
				    <el-table-column label="就诊医生">
				      <template scope="scope">
				        <span style="line-height: 24px;">{{ scope.row.yourDoctor }}</span> 
				      </template>
				    </el-table-column>
				    <el-table-column label="主诉">
				      <template scope="scope">
				         <div style="display: inline-block;">
		  			      	<span style="line-height: 24px;">{{ scope.row.yourComplain }}</span>
		  			     </div>
				      </template>
				    </el-table-column>
				    <el-table-column label="支付状态">
		  			    <template scope="scope">
	  			    			<span class="el-tag" style="color: white;" v-if="scope.row.pay==1">未支付</span>
	  			    			<span class="el-tag " style="color: white;background-color: #E9A200;" v-if="scope.row.pay==0">已支付</span>
		  			    </template>
		  			  </el-table-column>
		  			  <el-table-column label="就诊状态">
		  			    <template scope="scope">
	 			    			<span class="el-tag" style="color: white" v-if="scope.row.state==0">已取消</span>
	  			    			<span class="el-tag" style="color: white" v-if="scope.row.state==1">未就诊</span>
	  			    			<span class="el-tag" style="color: white;background-color: #E9A200;" v-if="scope.row.state==2">已就诊</span>
	  			    			<span class="el-tag" style="color: white;width: 48px;height: 22px; text-align: center;" v-if="scope.row.state==-1">爽约</span>
		  			    </template>
		  			  </el-table-column>
		  			   <el-table-column label="操作" width=180>
		  			    <template scope="scope">
		  			    	<div class="cell cell-blue" >
		  						<i class="el-icon-document"></i>
		  						<span style="padding-right: 10px;">查看</span>
		  						<i class="el-icon-close" v-if="scope.row.state==1"></i>
		  						<span v-if="scope.row.state==1">取消</span>
		  			    	</div>
		  			    </template>
		  			  </el-table-column>
				  </el-table>
			</div>
			<div class="allAppointPage">
				 <div class="block" style="text-align: center;">
				   <el-pagination
				     @size-change="handleSizeChange"
				     @current-change="handleCurrentChange"
				     :current-page="currentPage4"
				     :page-sizes="[10, 20, 30, 40]"
				     :page-size="10"
				     layout=" prev, pager, next, sizes, jumper"
				     :total="100">
				   </el-pagination>
				 </div>
			</div>
		  </el-tab-pane>
		  <!-- 可预约查询 -->
		  <el-tab-pane label="可预约查询" name="third">
			<div class="allAppoint allAppointQuery" style="padding: 16px 22px;">
				<span> <el-button icon="arrow-left"></el-button><el-input placeholder="本周"></el-input> <el-button icon="arrow-right"></el-button></span>
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      placeholder="2016-09-18"
			      :picker-options="pickerOptions0">
			    </el-date-picker>
			    <i class=" stateIcon icon-img rightIcon"></i>
			    <span>科室:</span>
			    <el-select v-model="value" placeholder="全部科室" >
			      <el-option
			        v-for="item in options"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value">
			      </el-option>
			     </el-select>
			    <span>出诊医生:</span>
			    <el-select v-model="value" placeholder="所有" >
			      <el-option
			        v-for="item in doctorName"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value">
			      </el-option>
			    </el-select>
			    <i class="el-icon-search stateIcon"></i>
			    <router-link to="/booking/newAppoint"> <i class="el-icon-plus stateIcon" style="margin-left: 10px; "></i></router-link>
			</div>
			<div class="allAppoint allAppointRemain">
				<div class="remainWeek">
					<div class="remainDay" v-for="remain in remainNum">
						<p style="border-bottom: 1px solid  #dfe6ec;padding-bottom: 10px;margin-bottom: 10px;font-weight: bold;">{{remain.day}}<br>{{remain.date}}</p>
						<el-button type="primary" size="mini" v-if="remain.num>0">余号量</el-button><el-button size="mini" v-if="remain.num>0">{{remain.num}}</el-button>
						<el-button size="mini" v-if="remain.num==0" style="background: rgb(182, 182, 182);border-color:#B6B6B6;color:#000;">余号量</el-button><el-button size="mini" v-if="remain.num==0" style="border-color:#B6B6B6;color:#B6B6B6;">{{remain.num}}</el-button>
						<p v-if="remain.num<0" style="line-height: 20px;color: #B6B6B6;">暂无排班</p>
					</div>
				</div>
			</div>
			<div class="allAppoint allAppointRemain">
				<div class="remainWeek">
					<div class="remainDay" v-for="money in remainMoney" style="width: 25%;text-align: center;">
						<p style="border-bottom: 1px solid  #dfe6ec;padding-bottom: 10px;margin-bottom: 10px;padding-left: 10px;font-weight: bold;">{{money.actor}}</p>
					</div>
					<p style="line-height: 20px;color: #B6B6B6;text-align: center;">暂无记录</p>			
				</div>
			</div>
		  </el-tab-pane>
		</el-tabs>

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
	#yy-appointment{
		background: #F6F6F6;
		font-size: 14px;
		font-family: "微软雅黑";
	}
/*	.yy-tabs{
		width: 80%;
		margin: 2% auto;
	}*/
	.yy-tabs .el-tabs__header {
	    border-radius: 7px;
	    background: #FFFFFF;
	    box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
	}
	.yy-tabs .el-tabs__item.is-active {
	    background: #22D185;
	    color: white;
	}
	.el-tabs__item:nth-child(2).is-active {
		border-radius: 7px 0 0px 7px;
	}
	.yy-tabs .el-tabs__active-bar{
		display: none;
	}
	.yy-tabs .el-tabs__item{
		color: #B6B6B6;
	    height: 48px;
	    line-height: 48px;
	}
	.yy-tabs .el-tabs__header {
	     border-bottom: none; 
	}
	/*今日预约*/
	.yy-section,.yy-doctor{
		float: left;
		min-width: 142px;
		width: 10%;
		background: white;
		padding: 16px 10px 0 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, .25);
	    margin-bottom: 20px;
	}
	.yy-section ul{
		text-align: left;
		padding-left: 5px;
	    margin-top: 25px;
	}
	.yy-section ul li{
		margin-bottom: 30px;
		color: #818382;
	}
	.yy-section ul li a{
		color: #818382;
	}
	.yy-section ul li:nth-child(1) a{
		color: black;
		font-weight: bold;
	}
	#yy-appointment .el-button+.el-button {
	     margin-left: 0px; 
	}
	#yy-appointment .el-button--mini {
	    border-radius: 4px 0 0 4px;
	}
	#yy-appointment .el-button--mini:nth-child(3) {
		color: #7CB9EF;
   		border-radius: 0 4px 4px 0;
	    border-color: #7CB9EF;
	    letter-spacing: 0.5px;
	}
	#yy-appointment .el-button--primary {
	    background-color: #83b9eb;
	    border-color: #7CB9EF;
	    letter-spacing: 0.5px;
	}
	/*医生信息*/
	.el-table--border td, .el-table--border th {
	     border-right: none; 
	}
	.yy-doctor{
		width: 84%;
		/*max-width: 628px;*/
		margin-left: 15px;
		padding-left:0;
		padding-right: 0;
	}
	.doctorTime{
	    border-bottom: 1px solid #EFEFEF;
	    padding-bottom: 16px;
	    width: 100%;
	    text-align: left;
	    padding-left: 20px;
	    margin-bottom: 13px;
	}
	.doctorTime span{
		font-weight: bold;
	}
	.yy-doctor h6{
		display: inline-block;
		margin-right: 24px;
	}
	.doctorList{
		overflow: hidden;
		margin-top: -14px;
	}
	.doctorList .el-button{
		background-color: #E9A200;
		padding: 0 5px;
		height: 24px;
		line-height: 22px;
		font-size: 12px;
		color: #fff;
		border-radius: 4px;
		box-sizing: border-box;
		border: 1px solid transparent;
	}
	.doctorList .el-tag {
	    background-color: #E9A200;
	}
	.doctorList .cell span{
		/*margin-right: 6px;*/
		margin-left: 0;
	}
	.cell-blue span{
		color: #76BAF9;
	}
	.cell-blue i{
	    color: #76BAF9;	
	}
	.el-table td {
    	height: 66px;
	}
	.el-table .cell {
	    text-align: right;
	}
 	.doctorList thead{
 		display: none;
 	}
 	/*所有预约*/
 	.allAppoint{
 		width: 100%;
 		text-align: left;
 		background: white;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		border-radius: 7px;
		padding: 16px;
		/*padding: 16px 0;*/
 	}
 	.allAppoint .patient{
 		display: inline;
 	}
 	.allAppoint .patient input{
 		width: 15%;
 	}
 	.allAppoint .el-input, .el-input__inne {
 	    margin-right: 12px;
 	    margin-bottom: 12px;
 	}
 	.allAppoint .el-select {
 	    margin-right: 12px;
 	    width: 10%;
 	}
 	.allAppoint .stateIcon{
 		background: #22D185;
 		color: white;
 		padding: 6px;
	    border-radius: 4px;
 	}
 	.allAppointList{
 		margin-top: 20px;
 		margin-bottom: 20px;
 	}
 	.allAppointList .el-table {
 		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
 		border-radius: 7px;
 	}
	.allAppointList .el-table .cell {
	    text-align: left;
	    font-size: 16px;
	}
	.allAppointList .el-tag {
	    background-color: #C7C7C7;
	}
	.allAppointList .el-table th,.allAppointList .el-table__footer-wrapper thead div,.allAppointList .el-table__header-wrapper thead div {
	    background-color: white;
	}
	/*分页*/
	.allAppointPage .el-autocomplete-suggestion__wrap, .el-pager li {
    	 border: none; 
	}
	.allAppointPage .el-pager li.active {
	    border-color: #2AC782;
	    background-color: #2AC782;
	    border-radius: 15px;
	}
	.allAppointPage .el-pager li {
	    background: transparent;
	}
	.allAppointPage .el-pagination .btn-next, .el-pagination .btn-prev {
    	background: transparent;
    	border: none;
    }
    .allAppointPage .el-pagination button.disabled {
	    background-color: transparent;
	}
	.allAppointPage .el-pager li:last-child {
	     border-right: none; 
	}
	/*可预约查询*/
	.allAppoint .icon-img{
		background-repeat: no-repeat;
		background-size: 100% 100%;
		vertical-align: middle;
		position: relative;
		top: -2px;
		margin-right: 5px;
		display: inline-block;
		background-position: 0 0;
	}
	.allAppoint .rightIcon{
		width: 16px;
		height: 16px;
		background-size: 59% 83%; 
		background-position: 7px 3px;
		background-image: url(../assets/yy/右箭头.png);
	}
	.allAppointQuery .el-date-editor.el-input {
	    width: 126px;
	}
	.allAppointQuery span .el-input{
		width: 100px;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		text-align: center;
	}
	.allAppointQuery span .el-input .el-input__inner{
		padding: 3px 31px;
	}
	.allAppointQuery span .el-button{
		padding: 7px 7px;
		border-radius: 15px;
		margin-right: 12px;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
	}
	.allAppointRemain{
		margin-top: 20px;
		padding: 16px 0;
	}
	.remainDay{
		width: 14.28%;
		text-align: center;
		display: inline-block;
	}
</style>

<script>
    import { api } from '@/global/api.js'//引入静态资源
	import Vue from 'vue' 
	export default {
	    data() {
	      return {
	        activeName: 'first',
	        value6: '',
	        value1: '',
	        input: '',
	        currentPage4: 4,
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
	        }],
	        value: '',
	        doctorData: {
	        	date: '',
	        	Drname: '',
	        	state: '',
	        },
	        tableData: [{
	          date: '',
	          appoint: 1,
	          name: '',
	          yourName: '',
	          tel: 13012345678,
	        }],
	        doctorName: [{
	          value: '选项1',
	          label: '刘医生'
	        }],
	        doctorState: [{
	          value: '选项1',
	          label: '就诊中'
	        }],
	        allAppointData: [{
	          yourDate: '20160908',
	          yourTime: '11:00~12:00',
	          pay: 1,
	          name: '就诊中',
	          yourName: '李春华',
	          yourSex: '女',
	          yourTel: 13012345678,
	          yourDoctor: '王医生',
	          yourComplain: '病情描述文字太多会换行......',
	          state: '0'
	        }], 
	        pickerOptions0: {
	          disabledDate(time) {
	            return time.getTime() < Date.now() - 8.64e7;
	          }
	        },
	        remainNum: [{
	        	day:"今天",
	        	date:"09-18",
	        	num:'0'
	        }
	        ],
	        remainMoney: [{
	        	actor: "可预约时间段"
	        },{
	        	actor: "出诊医生"
	        },{
	        	actor: "诊金(元)"
	        },{
	        	actor: "操作"
	        }]
	        // doctorData: {
	        // 	date: "09:00~11:00",
	        // 	Drname: "刘医生",
	        // 	state: "出诊"
	        // },
	        // tableData: [{
	        //   date: '09:00~10:00',
	        //   appoint: 1,
	        //   name: '就诊中',
	        //   yourName: '李春华',
	        //   tel: 13012345678,
	        // }, {
	        //   date: '10:00~11:00',
	        //   appoint:0,
	        //   tag:0,
	        //   yourName: '无预约',
	        // }, {
	        //   date: '09:00~10:00',
	        //   appoint:0,
	        //   tag:1,
	        //   yourName: '李春华',
	        //   tel: 13012345678,
	        // }],
	        // doctorName: [{
	        //   value: '选项1',
	        //   label: '刘医生'
	        // }, {
	        //   value: '选项2',
	        //   label: '张医生'
	        // }, {
	        //   value: '选项3',
	        //   label: '李医生'
	        // }, {
	        //   value: '选项4',
	        //   label: '黄医生'
	        // }, {
	        //   value: '选项5',
	        //   label: '潘医生'
	        // }],
	        // doctorState: [{
	        //   value: '选项1',
	        //   label: '就诊中'
	        // }, {
	        //   value: '选项2',
	        //   label: '无预约'
	        // }, {
	        //   value: '选项3',
	        //   label: '休假中'
	        // }],
	        // allAppointData: [{
	        //   yourDate: '20160908',
	        //   yourTime: '11:00~12:00',
	        //   pay: 1,
	        //   name: '就诊中',
	        //   yourName: '李春华',
	        //   yourSex: '女',
	        //   yourTel: 13012345678,
	        //   yourDoctor: '王医生',
	        //   yourComplain: '病情描述文字太多会换行......',
	        //   state: '0'
	        // }, {
	        //   yourDate: '20160908',
	        //   yourTime: '11:00~12:00',
	        //   pay: 1,
	        //   name: '就诊中',
	        //   yourName: '李春华',
	        //   yourSex: '女',
	        //   yourTel: 13012345678,
	        //   yourDoctor: '王医生',
	        //   yourComplain: '病情描述文字太多会换行......',
	        //   state:'1'
	        // }, {
	        //   yourDate: '20160908',
	        //   yourTime: '11:00~12:00',
	        //   pay: 1,
	        //   name: '就诊中',
	        //   yourName: '李春华',
	        //   yourSex: '女',
	        //   yourTel: 13012345678,
	        //   yourDoctor: '王医生',
	        //   yourComplain: '病情描述文字太多会换行......',
	        //   state:'0'
	        // },{
	       	//   yourDate: '20160908',
	        //   yourTime: '11:00~12:00',
	        //   pay: 1,
	        //   name: '就诊中',
	        //   yourName: '李春华',
	        //   yourSex: '女',
	        //   yourTel: 13012345678,
	        //   yourDoctor: '王医生',
	        //   yourComplain: '病情描述文字太多会换行......',
	        //   state:'2'
	        // },{
	       	//   yourDate: '20160908',
	        //   yourTime: '11:00~12:00',
	        //   pay: 1,
	        //   name: '就诊中',
	        //   yourName: '李春华',
	        //   yourSex: '女',
	        //   yourTel: 13012345678,
	        //   yourDoctor: '王医生',
	        //   yourComplain: '病情描述文字太多会换行......',
	        //   state:'-1'
	        // },{
	       	//   yourDate: '20160908',
	        //   yourTime: '11:00~12:00',
	        //   pay: 0,
	        //   name: '就诊中',
	        //   yourName: '李春华',
	        //   yourSex: '女',
	        //   yourTel: 13012345678,
	        //   yourDoctor: '王医生',
	        //   yourComplain: '病情描述文字太多会换行......',
	        //   state:'-1'
	        // },{
	       	//   yourDate: '20160908',
	        //   yourTime: '11:00~12:00',
	        //   pay: 0,
	        //   name: '就诊中',
	        //   yourName: '李春华',
	        //   yourSex: '女',
	        //   yourTel: 13012345678,
	        //   yourDoctor: '王医生',
	        //   yourComplain: '病情描述文字太多会换行......',
	        //   state:'-1'
	        // },
	        // ],
	      };
	    },
	    methods: {
	    	handleClick(tab, event) {
	    	  console.log(tab, event);
	    	},
	    	handleEdit(index, row) {
	    	  console.log(index, row);
	    	},
	    	handleDelete(index, row) {
	    	  console.log(index, row);
	    	},
	    	handleSizeChange(val) {
		      console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		      console.log(`当前页: ${val}`);
		    },
		    getData:function(){
		    	let re = this;
		    	Vue.http.get(api.appointment).then(function(response){
		    		re.doctorData = response.data.appointment.doctorData[0];
		    		re.tableData = response.data.appointment.tableData;
		    		re.doctorName = response.data.appointment.doctorName;
		    		re.doctorState = response.data.appointment.doctorState;
		    		re.allAppointData = response.data.appointment.allAppointData;
		    		re.remainNum = response.data.appointment.remainNum;
		    		console.log("哈哈哈",response.data.appointment)
		    		console.log(response.data.appointment)
		    	},function(){
		    		alert('申请失败！');
		    	})
		    }
	    },
	    mounted: function (){
	    	var vm = this;
	    	vm.getData();
	    }
	}
</script>
