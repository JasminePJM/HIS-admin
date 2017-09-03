<template>
<div id='patient-form'>
	<div class="patient-form">
		<el-tabs v-model="current">
			<el-tab-pane label="患者档案" name="patientFiles">
				<p class="patp">
					患者：<el-input placeholder="请输入姓名/手机号" style="width: 200px;" v-model="inputVal" @keyup.enter.native="searchPatient"></el-input>
					<el-button icon="search" class="patbtn patbtn-s" @click="searchPatient()"></el-button>
					<el-button class="patbtn patbtn-c" @click="gotoPI">新建档案</el-button>
				</p>
				<el-table :data="list">
					<el-table-column label="序号" prop="number" >
					</el-table-column>
					<el-table-column label="ID" prop="ID" class="pattc">
					</el-table-column>
					<el-table-column label="姓名" prop="name" class="pattc">
					</el-table-column>
					<el-table-column label="性别" prop="sex" class="pattc">
					</el-table-column>
					<el-table-column label="年龄" prop="age" class="pattc">
					</el-table-column>
					<el-table-column label="电话" prop="tel" class="pattc telCol">
					</el-table-column>
					<el-table-column label="建档时长" prop="duration" class="pattc">
					</el-table-column>
					<el-table-column label="就诊次数" prop="visitTimes" class="pattc">
					</el-table-column>
					<el-table-column label="是否会员" prop="isMember" class="pattc">
					</el-table-column>
					<el-table-column label="操作">
				      <template scope="scope">
				        <a  @click="handleEdit(scope.$index, scope.row)" class="patient-xq">
				        	<img src="../assets/image/62.png" style="margin-left: -2px;">
				        	<span style="position:relative; top:-5px; color:#0086CD;">详情</span>
				        </a>
				      </template>
				    </el-table-column>
				</el-table>
			</el-tab-pane>
		</el-tabs>
	</div>
</div>

</template>
<script>
import { api } from '@/global/api.js'//引入静态资源
export default {
	// "name": "patient",
	data: function () {
		return {
			current: "patientFiles",
			list:[],
			inputVal:'',
		}
		
	},
	mounted(){
		this.getList()
	},
	methods: {
		getList() {
			this.$http.get(api.patient).then(function(res){
				this.list = res.data.data;
			}, function(res){
				this.$message("The Request is Failed.");
			})
		},
		searchPatient(){
			this.$http.get(api.onePatient,{params:this.inputVal}).then(function(res){
				this.list = res.data.data;
			}, function(res){
				this.$message("The Request is Failed.");
			})
		},
		handleEdit() {
			this.$router.push({path: '/patientDetails'});
		},
		gotoPI() {
			this.$router.push({path: '/patientInfo'});
		}
	}
}
</script>

<style>
#patient-form .patp{
	margin-left: 22px;
	font-size: 14px;
	margin-bottom: 25px;
	margin-top:10px;
}
#patient-form .patbtn{
	background: #22D185;
	color: white;
	border: none;
}
#patient-form .patbtn-s{
	width: 35px;
	padding-left: 11px;
}
#patient-form .patbtn-c{
	float: right;
}
#patient-form .patbtn:hover, .patbtn:focus{
	border: none;
	color: white;
	box-shadow: 0px 0px 1px gray;
}
#patient-form .pattc{
	margin-left: 0;
	/*overflow: hidden;*/
	/*white-space: nowrap;*/
	text-align: left;
}
#patient-form .patient-form .el-tabs__item.is-active{
	background: #22D185;
    color: white;
	border-radius: 7px;
	
}
#patient-form .patient-form .el-tabs__active-bar{
	display: none;
}
#patient-form .patient-form .el-tabs__header{
	box-shadow: 0px 3px 8px #BBB;
	border-radius: 7px;
}
#patient-form .patient-xq{
	border:none; 
	color: #0086CD;
}
#patient-form .patient-xq:hover{
	background: #EEF1F6;
	cursor: pointer;
}
#patient-form .patient-form .el-table__row .el-table_1_column_6 .cell{
	padding-left: 12px;
	padding-right:12px;
}
</style>