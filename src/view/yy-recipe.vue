<template>
	<div id="yy-recipe">
		<el-tabs v-model="activeName" class="yy-tabs2" @tab-click="handleClick2">
		  <el-tab-pane label="今日处方" name="first">
			<el-checkbox v-model="checked">自动刷新</el-checkbox>
			<el-row>
			  <!-- 待审方 -->
			  <el-col :xs="8" :sm="6" :md="4" :lg="5">
			  	<div class="grid-content">
					<div class="yyPending">
						<p style="">待审方  ({{ ptsList.length }})</p>
						<div class="ptsName" v-for="pts in ptsList">
							{{ pts.name }}
						</div>
					</div>
			  	</div>
			  </el-col>
			  <!-- 处方信息 -->
			  <el-col :xs="4" :sm="6" :md="16" :lg="18" style="margin-left: 25px;">
			  	<div class="grid-content">
					<div class="recipeMain">
						<div class="recipePtMessage">
							<img src="../assets/yy/1.png">
							<span> {{ patientData.ptName}}   ({{ patientData.ptAge}}岁) </span>
							<span style="float: right;margin-right: 10px;color:#1296db;"><i class="icon-img icon-print"></i>打印处方</span>
						</div>
						<div class="recipePtMessage recipePtAD">
							<span>过敏史:</span><span> {{ patientData.ptAllergy }} </span>
							<br>
							<span>诊断:</span><span class="recipePtDia"> {{ patientData.ptDiagnose }} </span>
						</div>
						<!-- 西药01table -->
						<div class="recipePtPills" style="border-bottom:1px solid #F2F2F2;padding-bottom:20px;">
							<span><p>西药01</p><el-tag>有效</el-tag><el-tag>未缴费</el-tag></span>
 							<div class="recipePtPillsTable">
								<el-table ref="multipleTable" :data="pillTable" border tooltip-effect="dark" style="width: 100%;" @selection-change="handleSelectionChange">
								   <el-table-column prop="name" label="诊所取药" width="100">
								   	 <template scope="scope">
							   	       <div style="display: inline-block;text-align: center;width: 100%">
							   	       	<el-checkbox></el-checkbox>
							   	       </div> 
							   	     </template>
								   </el-table-column>
								   <el-table-column label="名称(规格)" width="150">
							   	     <template scope="scope">
							   	       <div style="display: inline-block;text-align: left;width: 100%">
							   	       	<span style="margin-left: -7px;line-height: 24px;color:#68696B;">{{ scope.row.pillName }}</span> 
							   	       	<br> 
							   	 	  	<span style="margin-left: -10px;color:#D6D6D6;" >{{ scope.row.pillSize }}</span>
							   	       </div> 
							   	     </template>
								   </el-table-column>
								   <el-table-column label="用法" width="100">
								   		<template scope="scope">{{ scope.row.pillUse }}</template>
								   </el-table-column>
								   <el-table-column prop="pillDosage" label="用量/次" width="90">
								   </el-table-column>
								   <el-table-column prop="pillFrequency" label="频次" width="90">
								   </el-table-column>
								   <el-table-column prop="pillDays" label="天数" width="80">
								   </el-table-column>
								   <el-table-column prop="pillEntrust" label="嘱托" width="90">
								   </el-table-column>
								   <el-table-column prop="pillNum" label="数量" width="70">
								   </el-table-column>
								   <el-table-column prop="pillUnit" label="单位" show-overflow-tooltip>
								   </el-table-column>
								 </el-table>
								<!-- 开单医生 -->
								<div class="billedDr">
									<span style="color:#C6C2B6;">开单医生:</span><span style=""> {{ billedDrs }} </span>
									<!-- 提交按钮 -->
									<div slot="footer" class="dialog-footer">
										<el-button @click="open3">审方不通过</el-button>
										<el-button type="success" @click="open2" style="background: #21D180;color: #fff">审方通过</el-button>
									</div>
								</div>
							</div> 
						</div>
						<!-- 西药02table -->
						<div class="recipePtPills" style="padding-bottom: 80px;">
							<span><p>西药02</p><el-tag>有效</el-tag><el-tag>未缴费</el-tag></span>
 							<div class="recipePtPillsTable">
								<el-table ref="multipleTable" :data="pillTable" border tooltip-effect="dark" style="width: 100%;" @selection-change="handleSelectionChange">
								   <el-table-column prop="name" label="诊所取药" width="100">
								   	 <template scope="scope">
							   	       <div style="display: inline-block;text-align: center;width: 100%">
							   	       	<el-checkbox></el-checkbox>
							   	       </div> 
							   	     </template>
								   </el-table-column>
								   <el-table-column label="名称(规格)" width="150">
							   	     <template scope="scope">
							   	       <div style="display: inline-block;text-align: left;width: 100%">
							   	       	<span style="margin-left: -7px;line-height: 24px;color:#68696B;">{{ scope.row.pillName }}</span> 
							   	       	<br> 
							   	 	  	<span style="margin-left: -10px;color:#D6D6D6;" >{{ scope.row.pillSize }}</span>
							   	       </div> 
							   	     </template>
								   </el-table-column>
								   <el-table-column label="用法" width="100">
								   		<template scope="scope">{{ scope.row.pillUse }}</template>
								   </el-table-column>
								   <el-table-column prop="pillDosage" label="用量/次" width="90">
								   </el-table-column>
								   <el-table-column prop="pillFrequency" label="频次" width="90">
								   </el-table-column>
								   <el-table-column prop="pillDays" label="天数" width="80">
								   </el-table-column>
								   <el-table-column prop="pillEntrust" label="嘱托" width="90">
								   </el-table-column>
								   <el-table-column prop="pillNum" label="数量" width="70">
								   </el-table-column>
								   <el-table-column prop="pillUnit" label="单位" show-overflow-tooltip>
								   </el-table-column>
								 </el-table>
								<!-- 开单医生 -->
								<div class="billedDr">
									<span style="color:#C6C2B6;">开单医生:</span><span style=""> {{ billedDrs }} </span>
									<!-- 提交按钮 -->
									<div slot="footer" class="dialog-footer">
										<el-button @click="open3">审方不通过</el-button>
										<el-button type="success" @click="open2" style="background: #21D180;color: #fff">审方通过</el-button>
									</div>
								</div>
							</div> 
						</div>
					</div>
			  	</div>
			  </el-col>
			  <!-- 待发药 -->
			  <el-col :xs="8" :sm="6" :md="4" :lg="5">
			  	<div class="grid-content">
			  		<div class="yyPending" style="margin-top: -500px;">
			  			<p style="">待发药  ({{ ptPillsList.length }})</p>
			  			<div class="ptsName" v-for="pts in ptPillsList">
			  				{{ pts.name }}
			  			</div>
			  		</div>
			  	</div>
			  </el-col>
			</el-row>


		  </el-tab-pane>

		  <el-tab-pane label="所有处方" name="second">
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
			    <span>就诊医生:</span>
			    <el-select v-model="value" placeholder="请选择" >
			      <el-option
			        v-for="item in doctorName"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value">
			      </el-option>
			    </el-select>
			    <br>
			    <span>就诊流水号:</span>
			    <el-input v-model="input" class="patient" placeholder=""></el-input>
			    <span>根据药品搜素:</span>
			    <el-input v-model="input" class="patient" placeholder="通用名/商品名/助记码"></el-input>
			    <i class="el-icon-search stateIcon"></i>
			</div>
			<div class="allAppointList">
				<el-table :data="ptVisitData" border style="width: 100%">
					<el-table-column class="allALnum" type="index" width="70" label="序号">
					</el-table-column>
				    <el-table-column label="就诊流水号">
				      <template scope="scope">
				        <span style="line-height: 24px;">{{ scope.row.ptVisitSerial }}</span> 
				      </template>
				    </el-table-column>
				    <el-table-column label="患者姓名">
				      <template scope="scope">
				        <span style="line-height: 24px;">{{ scope.row.ptName }}</span> 
				      </template>
				    </el-table-column>
				    <el-table-column label="性别" width="70" >
				      <template scope="scope">
				        <span style="line-height: 24px;">{{ scope.row.ptSex }}</span> 
				      </template>
				    </el-table-column>
				    <el-table-column label="就诊时间" width="210">
				      <template scope="scope">
				         <div style="display: inline-block;">
		  			      	<span style="line-height: 24px;">{{ scope.row.ptTime }}</span>
		  			     </div>
				      </template>
				    </el-table-column>
				    <el-table-column label="就诊科室">
		  			    <template scope="scope">
				        	<span style="line-height: 24px;">{{ scope.row.ptClinic }}</span> 
				      </template>
		  			  </el-table-column>
		  			  <el-table-column label="就诊医生">
		  			    <template scope="scope">
				        	<span style="line-height: 24px;">{{ scope.row.ptDoctor }}</span> 
				      </template>
		  			  </el-table-column>
		  			   <el-table-column label="操作" width=180>
		  			    <template scope="scope">
		  			    	<div class="cell cell-blue" >
		  						<i class="el-icon-document"></i>
		  						<span>查看</span>
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

		</el-tabs>

	</div>
</template>

<style>
	#yy-recipe{
		font-size: 14px;
		font-family: "微软雅黑"
	}
	.yy-tabs2 .el-tabs__header {
	    border-radius: 7px;
	    background: #FFFFFF;
	    box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
	}
	.yy-tabs2 .el-tabs__item.is-active {
	    background: #22D185;
	    color: white;
	}
	.yy-tabs2 .el-tabs__item:nth-child(2).is-active {
		border-radius: 7px 0 0px 7px;
	}
	.yy-tabs2 .el-tabs__active-bar{
		display: none;
	}
	.yy-tabs2 .el-tabs__item{
		color: #B6B6B6;
	    height: 48px;
	    line-height: 48px;
	}
	.yy-tabs2 .el-tabs__header {
	     border-bottom: none; 
	}
	/*自动刷新的选中框*/
	.yy-tabs2 .el-checkbox__inner::after {
	    border-color: #20a0ff;
	}
	.yy-tabs2 .el-checkbox__input.is-checked .el-checkbox__inner {
	    background-color: #fff;
	}

	.yy-tabs2 .grid-content {
	    border-radius: 4px;
	}

	/*待审方*/
	.yyPending{
		text-align: left;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		border-radius: 7px;
		background: white;
		height: 300px;
	}
	.yyPending{
		/*margin-top: -126px;*/
	}
	.recipeMain{
		text-align: left;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		border-radius: 7px;
		background: white;
	}
	.yyPending p{
		border-bottom:1px solid #F2F2F2;
		height: 47px;
		line-height: 47px;
		font-size: 16px;
		padding-left: 10px;
	}
	.ptsName{
		height: 57px;
		line-height: 57px;
		color: #929493;
		padding-left: 10px;
	}
	.ptsName:hover{
		background: #E0EEFB;
		color: #0072D8;
	}
	.yy-tabs2 .icon-img{
		background-repeat: no-repeat;
		background-size: 100% 100%;
		vertical-align: middle;
		position: relative;
		top: -2px;
		margin-right: 5px;
		display: inline-block;
		background-position: 0 0;
	}
	.yy-tabs2 .icon-print{
		width: 24px;
		height: 24px;
		background-image: url(../assets/yy/打印.png);
	}
	.recipePtMessage{
		overflow: hidden;
		width: 100%;
		line-height: 54px;
		font-size: 16px;
		color: #8B8F92;
		border-bottom: 1px solid #F2F2F2;
	}
	.recipePtMessage img{
		width: 32px;
		height: 32px;
		padding: 10px;
		float: left;
	}
	/*诊断自动换行*/
	.recipePtAD{
		padding-left: 10px;
	}
	.recipePtDia{
		width: 80%;
		line-height: 24px;
		display: inline-block;
		vertical-align: top;
		margin-top: 16px;
		margin-bottom: 16px;
	}
	/*西药01*/
	.recipePtPills{
		padding: 16px;

	}
	.recipePtPills p{
		border-left: 6px solid #1FCE7F;
		padding-left: 5px;
		letter-spacing: 1px;
		padding-right: 5px;
		display: inline-block;
	}
	.recipePtPills .el-tag{
		width: 50px;
		text-align: center;
	}
	.recipePtPills .el-tag:nth-child(2){
		background: #F1B517;
		padding-right: 5px;
		margin-right: 5px;

	}
	/*西药表格*/
	.recipePtPillsTable{
		margin-top: 20px;
	}
	.recipePtPillsTable .el-table{
		color:#68696B;
	}
	.billedDr{
		margin-top: 20px;
		overflow: hidden;
		line-height: 34px;
	}
	/*提交按钮*/
	.recipePtPills .dialog-footer{
		display: inline-block;
    	float: right;
	}
	   
	.recipePtPills .dialog-footer button{
		background: #FFFFFF;
		color: #C2C2C2;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		padding: 9px 12px;
		border: 1px solid #E7E7E9;
		letter-spacing: 2px;
	}
	/*审核通过点击事件*/
	.el-message-box__status.el-icon-warning {
	    color: #D81519;
	}
	.el-message-box__header {
		display: none;
	}
	.el-message-box__btns {
	    text-align: center;
	}
	.el-message-box__btns button:nth-child(2) {
	    background-color: #13ce66;
	    border-color: #13ce66;
	}
	/*所有处方*/
 	.allAppoint{
 		width: 100%;
 		text-align: left;
 		background: white;
		box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
		border-radius: 7px;
		padding: 16px;
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
	.allAppointList .el-table .cell span{
	    font-size: 14px;
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
	.allAppointList .cell-blue i,.allAppointList .cell-blue span{
		color: #76BAF9;
	}
</style>

<script>
    import { api } from '@/global/api.js'//引入静态资源
	import Vue from 'vue' 
	export default {
	    data() {
	      return {
	      	value6: '',
	      	value1: '',
	      	value:'',
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
	      	doctorName: [{
	      	  value: '选项1',
	      	  label: '刘医生'
	      	}],
	        activeName: 'first',
	        checked: true,
            billedDrs:"王医生",
	        ptsList: [{
	        	name: "张患者",
	        },{
	        	name: "王某",
	        },{
	        	name: "司徒",
	        }],
	        ptPillsList: [{
	        	name: "张患者",
	        },{
	        	name: "李某",
	        },{
	        	name: "王某",
	        },{
	        	name: "司徒",
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
	        	ptAllergy:'',
	        	ptDiagnose:''
	        }],
	        pillTable: [{
              	date: '2016-05-03',
              	pillName: '王小虎',
              	pillSize:'',
              	pillUse: '上海市普陀区金沙江路 1518 弄',
              	pillDosage:'',
              	pillFrequency:'',
              	pillDays:'',
              	pillEntrust:'',
              	pillNum:'',
              	pillUnit:'',
            }],
            ptVisitData:[{
            	ptVisitNum:'',
            	ptVisitSerial:'',
            	ptName:'',
            	ptSex:'',
            	ptTime:'',
            	ptClinic:'',
            	ptDoctor:'',
            }]
	      }
	    },
	    methods: {
	    	handleClick2(tab, event) {
	    	  console.log(tab, event);
	    	},
	    	handleSelectionChange(val) {
	    	  this.multipleSelection = val;
	    	},
	    	// 读取json数据
	    	getData:function(){
	    		let re = this;
	    		Vue.http.get(api.appointment).then(function(response){
	    			re.patientData = response.data.appointment.patientData[0];
	    		})
	    		Vue.http.get(api.recipe).then(function(response){
	    			re.pillTable = response.data.recipe.pillTable;
	    			re.ptVisitData = response.data.recipe.ptVisitData;
	    		})
	    	},
	    	// 审方通过
	    	open2() {
	    	  this.$confirm('确认审核通过这张处方吗?', '提示', {
	    	    confirmButtonText: '确定',
	    	    cancelButtonText: '取消',
	    	    type: 'warning'
	    	  }).then(() => {
	    	    this.$message({
	    	      type: 'success',
	    	      message: '删除成功!'
	    	    });
	    	  }).catch(() => {
	    	            
	    	  });
	    	},
	    	// 审方不通过
	    	open3() {
	    	  this.$prompt('请输入邮箱', '提示', {
	    	    confirmButtonText: '确定',
	    	    cancelButtonText: '取消',
	    	    inputPattern: '',
	    	    inputErrorMessage: '邮箱格式不正确'
	    	  }).then(({ value }) => {
	    	    this.$message({
	    	      type: 'success',
	    	      message: '你的邮箱是: ' + value
	    	    });
	    	  }).catch(() => {
	    	    this.$message({
	    	      type: 'info',
	    	      message: '取消输入'
	    	    });       
	    	  });
	    	},
	    	handleSizeChange(val) {
		      console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		      console.log(`当前页: ${val}`);
		    },
	    },
	    mounted: function (){
	    	var vm = this;
	    	vm.getData();
	    }
	}
</script>