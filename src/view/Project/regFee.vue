<template>
	<div class="regFeeContainer">
		<div class="div-btn-add">
		 	<el-button @click="addDialogSeen=true" class="btn-add">新增挂号费</el-button> 
		</div>
		<div class="info-table" style="text-align: center;">
	    	<el-row class="tac table-title">
	    		<el-col  :span="3">
	    			序号
	    		</el-col>
	    		<el-col  :span="4">
	    			挂号类型
	    		</el-col>
	    		<el-col  :span="4">
	    			关联的项目
	    		</el-col>
	    		<el-col  :span="5">
	    			合计价格（元）
	    		</el-col>
	    		<el-col  :span="4">
	    			状态
	    		</el-col>
	    		<el-col  :span="4">
	    			操作
	    		</el-col>
	    	</el-row>
	    	<el-row class="tac" v-for="(item,index) in infoItems" :key="index">
	    		<el-col  :span="3">
	    			{{index+1}}
	    		</el-col>
	    		<el-col  :span="4">
	    			{{item.classify}}
	    		</el-col>
	    		<el-col  :span="4">
	    			{{item.name}}
	    		</el-col>
	    		<el-col  :span="5">
	    			{{item.unitPrice}}
	    		</el-col>
	    		<el-col  :span="4">
	    			<span v-show="!item.state" class="forbidden-span" @click="item.state=!item.state">禁用</span>
	    			<span v-show="item.state" class="startUse-span" @click="item.state=!item.state">启用</span>
	    		</el-col>
	    		<el-col  :span="4">
	    			<el-col  :span="12">
	    				<a  @click="getRowInfo(index,item)">
	    					<img src="../../assets/img/Project/48.png">	
   						编辑</a>
        			</el-col>
        			<el-col  :span="12">
        				<a @click="item.state=!item.state" v-show="item.state">
        				<img src="../../assets/img/Project/46.png" >启用</a>	
        				<a @click="item.state=!item.state" v-show="!item.state">
        				<img src="../../assets/img/Project/47.png">禁用</a>	
        			</el-col>
	    		</el-col>
	    	</el-row>
		</div>
		 <!-- 新增弹窗 -->
    	<el-dialog title="修改挂号费" :visible.sync="editDialogSeen " class="editDialog">
          	<el-form class="small-space"  label-position="left" label-width="100px" style='width: 400px; margin-left:50px;'>
	            <el-form-item label="挂号类型:">
	             	<el-input v-model="editItem.classify"></el-input>
	            </el-form-item>
	            <el-form-item label="关联的项目：">
	             	<el-input v-model="editItem.name"></el-input>
	            </el-form-item>
	            <el-form-item label="合计的价格（元）：">
	             	<el-input v-model="editItem.unitPrice"></el-input>
	            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            	<el-button @click="editDialogSeen = false;" class="canel-btn">取 消</el-button>
            	<el-button type="primary" @click="editRegfee(editIndex)" class="submit-btn">提 交</el-button>
            </div>
    	</el-dialog>

		 <!-- 新增弹窗 -->
    	<el-dialog title="修改挂号费" :visible.sync="changeDialogSeen " class="changeDialog">
          	<el-form class="small-space"  label-position="left" label-width="100px" style='width: 400px; margin-left:50px;'>
            <el-form-item label="类型名称：">
             	<label>{{changeType.name}}</label>
            </el-form-item>
        	<el-form-item label="关联项目：" prop="relateItem" class="associtedItem">
	    		<el-input v-model="inputListval"></el-input>
	    		<a class="a-add" @click="addListInfo(changeType)"><img src="../../assets/img/Project/25.png"></a>
	  		</el-form-item>	   
           	<div class="changeList-table">
	  			<el-row v-for="(list,index) in changeType.listInfo" :key="1">
	  				<el-col :span="6" style="padding-left:10px;">
	  					{{list.name}}
	  				</el-col>
	  				<el-col :span="6">
	  					{{list.price}}元
	  				</el-col>
	  				<el-col :span="3">
	  					<a @click="dleRelateItem(index)"><img src="../../assets/img/Project/17.png"></a>
	  				</el-col>
	  			</el-row>
		  	</div>
            </el-form>
            <div slot="footer" class="dialog-footer">
            	<el-button @click="changeDialogSeen = false;" class="canel-btn">取 消</el-button>
            	<el-button type="primary" @click="" class="print-btn">打 印</el-button>
            </div>
    	</el-dialog>

    	<el-dialog title="新增挂号费" :visible.sync="addDialogSeen" class="addDialog">
          	<el-form class="small-space"  label-position="left" label-width="80px"  style='width: 600px; margin-left:30px;'>
          		<el-row>
          			<el-col :span="12">
          				<div class="type-table">
	          				<el-card class="box-card">
								<div slot="header" class="clearfix">
								    <span style="line-height: 36px;">挂号类型</span>
								    <a style="float: right;" @click="addType()">
									    <img  src="../../assets/img/Project/55.png" style="position:relative; top:5px;">
									    <span style="color:#ADD3F7;font-size:16px;">新增</span>
									</a>
								</div>
								 <div v-for="(typel,index) in typeList" :key="1" class="text item" style="wisth:100%;" @dblclick="handleEdit(typel,index)" :class="{selectDiv:markselect===index}">
								 	<el-row>
									    <el-col :span="16" style="padding-left:30px;">{{typel.name}}</el-col>
									    <el-col :span="8">
									    	<div v-show="markselect!==index" style="color:#C3C3C3;">
									    		<span v-show="typel.state">已添加</span>
									    	</div>
									    	<div v-show="markselect===index">
									    		<a @click="deleteType(index)">
									    			<img  src="../../assets/img/Project/17.png">
									    		</a>
									    	</div>
									    </el-col>
									</el-row>
								 </div>
							</el-card>
							<div class="table-footer">
								<el-input style="top:8px;margin-right:5px;" placeholder="请输入" v-model="inputVal"></el-input>
								<el-button type="primary" @click="saveChange(markselect)" class="save-btn">保存</el-button>
							</div>
          				</div>
          			</el-col>
          			<el-col :span="12">
          				<p>类型名称：</p>
          				<el-form-item label="关联项目：" prop="relateItem" class="associtedItem">
				    		<el-input></el-input>
				    		<a class="a-add"><img src="../../assets/img/Project/25.png"></a>
				  		</el-form-item>	   
          			</el-col>
				</el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
            	<el-button @click="addDialogSeen = false;markselect=''" class="canel-btn">取 消</el-button>
            	<el-button type="primary" @click="" class="print-btn">打 印</el-button>
            </div>
    	</el-dialog>
		<el-pagination small layout="prev, pager, next,sizes,jumper" :total="100" class="page-nav" :page-sizes="[10, 20, 30, 40]" >
        </el-pagination>
	</div>
</template>
<script type="text/javascript">
	export default {
		data: function () {
	    	return {
	    		changeDialogSeen: false,
	    		editDialogSeen: false,
	    		addDialogSeen: false,
	    		markselect:'',
	    		inputVal:'',
	    		inputListval:'',
	    		changeType:{
	    			name:'',
	    			listInfo: [],
	    		},
	    		editItem:{
	        		"classify": "",
		        	"name": "",
		        	"unit": " ",
		        	"unitPrice": 0,
		        	"office": "",
		        	"location": "",
		        	"relateItem":"",
		        	"state": true
        	    }, 
        	    editIndex:'',
	    		typeList: [
	    			{
	    				name:"普通",
	    				state:true,
	    				listInfo: [
			    			{name:"挂号费",price:"200"},
			    			{name:"诊查费",price:"200"}
		    			]
	    			},
	    			{
	    				name:"主任医师",
	    				state:true,
	    				listInfo: [
			    			{name:"诊查费",price:"200"}
		    			]
	    			},
	    			{name:"加号",state:false,listInfo:{}},
	    			{name:"专家",state:false,listInfo:{}},
	    			{name:"会员加号",state:false,listInfo:{}},
	    		]	 
		    }
	    },
	    methods: {
	    	//编辑：获得某一行的数据
		    getRowInfo(index,item) {
		        this.editDialogSeen=true;
		        this.editItem=JSON.parse(JSON.stringify(item));
		        this.editIndex=index;
		    },
		    //编辑：编辑某一行的数据
		    editRegfee(index) {
		        this.infoItems[index]=this.editItem;
		         this.$notify.success({
		          	title: '成功',
		          	message: '修改成功',
		         	offset: 100,
		        });
		        this.editDialogSeen=false;
		    },
		    //
		    handleEdit(typel,index) {
		        this.markselect=index;
		        this.changeDialogSeen=true;
		        this.changeType=typel;
		    },
		    //获取state中的数据
		    getData(){
				this.$store.commit('getData')
			},
			//增加挂号费类型
			addType(){
				var val="加号";
				this.typeList.push({name:val,state:false,listInfo:''});
			},
			//删除挂号费类型
			deleteType(index){
				this.typeList.splice(index,1);
			},
			//删除某挂号费的关联项目
			dleRelateItem(index){
				this.changeType.listInfo.splice(index,1);
			},
			//保存修改
			saveChange(index){
				var val=this.inputVal.trim();
				if(!val){
					this.$message({
			          message: '警告，请输入有效值',
			          type: 'warning'
			        });
					return;
				}
				this.typeList[index].name=this.inputVal;
				this.inputVal="";
				this.markselect="";
			},
        },
	    computed:{
	    	infoItems :  function (){
	    		return this.$store.state.item.infoItems;
			},
	    },
        mounted: function(){
			//mounted是在vue实例化完成后，执行。相当于jq中的ready
				//$(document).ready(function(){ })
		    this.getData();
		},


    }
</script>
<style>
	.regFeeContainer .search-nav{
		margin-top: 15px;
	}
	.regFeeContainer .el-input{
		width: auto;
	}
	.regFeeContainer .search-nav .el-button--default{
		background-color: #21d081;
		padding:10px 10px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -1px 0px 0px 0px #FFFFFF,  
		            1px 0px 0px 0px #FFFFFF,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/
	}
	.regFeeContainer .search-nav .el-icon-search{
		color: white;
		border: none;
	}
	.regFeeContainer .search-nav .el-select,.regFeeContainer .el-pager .el-select{
		width: 100px;
	}
	.regFeeContainer .el-form--inline{
		text-align: left;
	}
	.regFeeContainer .el-form-item__label{
		color: #ABACAE;
	}
	.regFeeContainer .page-nav button,.regFeeContainer .page-nav li{
		background-color: rgba(255,255,255,0);
	}
	.regFeeContainer .el-pager li.active{
		background-color:  #21d081;
		border-color:  #21d081;
		border-radius: 50%;
	}
	
	.regFeeContainer .info-table{
		background-color: white;
		border-radius: 5px;
		margin-bottom: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            1px 0px 1px  #C8C8C8,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/
	}
	.regFeeContainer .info-table img{
		position: relative;
		top:5px;
	}
	.regFeeContainer .info-table .el-col{
		line-height: 50px;
		min-height: 50px;
		height: auto;
	}
	.regFeeContainer .info-table>.el-row{
		border-bottom: 1px solid #F6F6F6;
	}
	.regFeeContainer .forbidden-span{
		background-color: #CACACA;
	}
	.regFeeContainer .startUse-span{
		background-color: #ECAD00;
	}
	.regFeeContainer .startUse-span,.regFeeContainer .forbidden-span{
		display: block;
		width: 50px;
		height: 30px;
		line-height: 30px;
		color:white;
		font-size: 14px;
		margin: 10px auto;
		border-radius: 5px;
	}
	.regFeeContainer .info-table a{
		color: #B5D7F6;
		display: inline-block;
		height: 20px;
		line-height: 20px;
	}
	.regFeeContainer .info-table img{
		margin-top: 5px;
	}
	.regFeeContainer .info-table .table-title{
		font-weight:500;
	}
	.regFeeContainer .btn-add,.regFeeContainer .btn-add:hover{
		color: white;
		border: none;
		width: 50px；
	}
	.regFeeContainer .div-btn-add .btn-add{
		background-color: #1FD27D;
		display: inline-block;
		box-shadow: 0px -1px 0px 0px #FFFFFF, 
					-1px 0px 0px 0px #FFFFFF, 
					1px 0px 0px 0px #FFFFFF,
					 0px 2px 1px #C8C8C8;
	}

	.regFeeContainer .div-btn-add{
		text-align: right;
		margin: 20px;
	}
	.regFeeContainer .search-nav div:last-child{
		float: right;
	}


	/*add*/
	.regFeeContainer .changeDialog .dialog-footer,.regFeeContainer .addDialog .dialog-footer,.regFeeContainer .editDialog .dialog-footer{
		text-align: center;
		margin-bottom: 10px;
	}
	.regFeeContainer .changeDialog .dialog-footer button,.regFeeContainer .addDialog .dialog-footer button,.regFeeContainer .editDialog .dialog-footer button{
		width: 100px;
		box-shadow: 0px -1px 0px 0px #FFFFFF,
					 -1px 0px 0px 0px #FFFFFF, 
					 1px 0px 0px 0px #FFFFFF, 
					 0px 2px 1px #C8C8C8;
	}
	.regFeeContainer .changeDialog .canel-btn,.regFeeContainer .addDialog .canel-btn,.regFeeContainer .editDialog .canel-btn{
		background-color: white;
		color:#C3C3C3;
	}
	.regFeeContainer .changeDialog .canel-btn:hover,.regFeeContainer .addDialog .canel-btn:hover,.regFeeContainer .editDialog .canel-btn:hover{
		border-color: #C3C3C3;
	}
	.regFeeContainer .changeDialog .print-btn,.regFeeContainer .editDialog .submit-btn,.regFeeContainer .addDialog .save-btn,.regFeeContainer .addDialog .print-btn{
		background-color: #1FD27D;
		border-color: #1FD27D;
	}
	.changeDialog .el-form-item__content input{
		display: inline-block;
		position: relative;
		top: -13px;
	}
	.regFeeContainer .changeDialog .el-dialog__header,.regFeeContainer .addDialog .el-dialog__header{
		background-color: #F4F5F9;
		text-align: left;
		padding-bottom: 20px;
	}
	.regFeeContainer .changeDialog .el-dialog__body,.regFeeContainer .addDialog .el-dialog__body{
		padding-top: 10px;
	}
	.regFeeContainer .changeDialog .changeList-table .el-row{
		height: 35px;
		color:#C3C3C3;

	}
	.regFeeContainer .changeDialog .el-dialog--small{
		width: 500px;
	}
	.regFeeContainer .addDialog .el-dialog--small{
		width: 700px;
	}
	.regFeeContainer .changeDialog, .addDialog{
		text-align: left;
	}
	.regFeeContainer .el-form-item__label{
		padding: 0px; 
		padding-top:12px;
	}
	.regFeeContainer .addDialog .el-input,.regFeeContainer .addDialog .el-input__inner{
		width: 100px !important;
		position:relative;
		top:-8px;
	}
	.regFeeContainer .addDialog .type-table{
		border:1px solid #bfcbd9;
		margin-right:40px;
		border-radius: 5px;
	}
	.regFeeContainer .addDialog .el-card__header{
		height: 51px;
	    padding-top: 10px;
	    padding-bottom: 10px;
	    font-size: 18px;
	}
	.regFeeContainer .addDialog .el-card__body .el-row{
		height: 40px;
		line-height: 40px;
		font-size: 16px;
	}
	.regFeeContainer .addDialog .el-card{
		border:none;
		box-shadow: none;
	}
	.regFeeContainer .addDialog .el-card__body{
		padding-left: 0px;
		padding-right: 0px;
    	padding-top: 0px;

	}
	.regFeeContainer .addDialog .table-footer,.regFeeContainer .changeDialog .table-footer{
		margin-bottom: 10px;
		text-align: center;
	}
	.regFeeContainer .selectDiv{
		background-color: #DEEDFA;
		color:#5FA7E4;
	}
	.regFeeContainer .el-dialog--small{
		width: 40%;
		min-width: 445px;
	}
	.regFeeContainer .el-dialog{
		text-align: left;
	}

</style>