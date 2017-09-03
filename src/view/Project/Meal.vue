<template>
	<div class="mealContainer">
		<el-form :inline="true"  class="demo-form-inline search-nav" style="margin-bottom:40px;" v-model="inputForm">
  			<el-form-item label="套餐分类：" >
    			<el-select  placeholder="请选择" v-model="inputForm.classify">
      				<el-option v-for="cl in classify" v-bind:label="cl.val" v-bind:value="cl.val" :key="1">
      				</el-option>
    			</el-select>
  			</el-form-item>
  			<el-form-item label="套餐名称">
    			<el-input  placeholder="请输入套餐名称" v-model="inputForm.name"></el-input>
  			</el-form-item>
  			<el-form-item label="启用状态： ">
    			<el-select placeholder="请选择" v-model="inputForm.state">
     				<el-option label="警用" value="forbidden"></el-option>
     				<el-option label="启用" value="startUse"></el-option>
    			</el-select>
  			</el-form-item>
  			<el-form-item>
   			 	<el-button  icon="search"></el-button>
  			</el-form-item>
  			<el-form-item>
   			 	<el-button @click="" class="btn-add"><router-link to="/project/addMeal">新增套餐</router-link></el-button>
  			</el-form-item>
		</el-form>
		<div class="info-table" style="text-align: center;">
	    	<el-row class="tac table-title">
	    		<el-col  :span="2">
	    			序号
	    		</el-col>
	    		<el-col  :span="3">
	    			套餐分类
	    		</el-col>
	    		<el-col  :span="4">
	    			套餐名称
	    		</el-col>
	    		<el-col  :span="4">
	    			关联的项目
	    		</el-col>
	    		<el-col  :span="3">
	    			执行地点
	    		</el-col>
	    		<el-col  :span="3">
	    			启用状态
	    		</el-col>
	    		<el-col  :span="5" >
	    			操作      				
	    		</el-col>
	    	</el-row>
	    	<el-row class="tac" v-for="(item,index) in infoItems" :key="index">
	    		<el-col  :span="2">
	    			{{index+1}}
	    		</el-col>
	    		<el-col  :span="3">
	    			{{item.classify}}
	    		</el-col>
	    		<el-col  :span="4">
	    			{{item.name}}
	    		</el-col>
	    		<el-col  :span="4"  > 
      				<img src="../../assets/img/Project/62.png">
	    		</el-col>
	    		<el-col  :span="3">
	    			{{item.location}}
	    		</el-col>
	    		<el-col  :span="3">
	    			<span v-show="!item.state" class="forbidden-span" @click="item.state=!item.state">禁用</span>
	    			<span v-show="item.state" class="startUse-span" @click="item.state=!item.state">启用</span>
	    		</el-col>
	    		<el-col  :span="5">
	    			<el-col  :span="12">
	    				<a  @click="getRowInfo(index,item)">
	    					<img src="../../assets/img/Project/48.png">	
   						编辑</a>
        			</el-col>
        			<el-col  :span="12">
        				<a @click="item.state=!item.state" v-show="item.state">
        				<img src="../../assets/img/Project/46.png">启用</a>	
        				<a @click="item.state=!item.state" v-show="!item.state">
        				<img src="../../assets/img/Project/47.png">禁用</a>	
        			</el-col>
	    		</el-col>
	    	</el-row>
	    	 <!-- 新增弹窗 -->
	    	<el-dialog title="修改套餐" :visible.sync="editDialogSeen " class="editDialog">
	          	<el-form class="small-space"  label-position="left" label-width="100px" style='width: 400px; margin-left:50px;'>
		            <el-form-item label="套餐分类：">
		             	<el-input v-model="editItem.classify"></el-input>
		            </el-form-item>
		            <el-form-item label="套餐名称：">
		             	<el-input v-model="editItem.name"></el-input>
		            </el-form-item>
		            <el-form-item label="关联项目：">
		             	<el-input v-model="editItem.relateItem"></el-input>
		            </el-form-item>
		            <el-form-item label="执行地点：">
		             	<el-input v-model="editItem.location"></el-input>
		            </el-form-item>
	            </el-form>
	            <div slot="footer" class="dialog-footer">
	            	<el-button @click="editDialogSeen = false;" class="canel-btn">取 消</el-button>
	            	<el-button type="primary" @click="handleEdit(editIndex)" class="submit-btn">提 交</el-button>
	            </div>
	    	</el-dialog>
				
		</div>
		<el-pagination small layout="prev, pager, next,sizes,jumper" :total="100" class="page-nav" :page-sizes="[10, 20, 30, 40]" @size-change=""  @current-change="">
        </el-pagination>
	</div>
</template>
<script type="text/javascript">
	export default {
		data: function () {
	    	return {
	    		editItem:{
	        		"classify": "",
		        	"name": "",
		        	"unit": " ",
		        	"unitPrice": 0,
		        	"office": "",
		        	"location": "",
		        	"relateItem":"",
		        	"state": true,
        	    }, 
        	    inputForm: {
    	    		"classify":"",
    	    		"state":"",
    	    		"name":"",
        	    },
        	    editIndex:'',
	    		editDialogSeen: false, 
		    }
	    },
	    computed:{
        	infoItems :  function (){
        		return this.$store.state.item.infoItems;
			},
			classify :  function (){
        		return this.$store.state.item.classify;
			},
        },
	    methods: {
	    	//编辑：获得某一行的数据
		    getRowInfo(index,item) {
		        this.editDialogSeen=true;
		        this.editItem=JSON.parse(JSON.stringify(item));
		        this.editIndex=index;
		    },
		    //编辑：编辑某一行的数据
		    handleEdit(index) {
		        this.infoItems[index]=this.editItem;
		        this.$notify.success({
		          	title: '成功',
		          	message: '修改成功',
		         	offset: 100,
		        });
		        console.log(this.infoItems[index]);
		        this.editDialogSeen=false;
		    },
		    //获取state中的数据
		    getData(){
				this.$store.commit('getData')
			},
        },
        mounted:function(){
			//mounted是在vue实例化完成后，执行。相当于jq中的ready
		    this.getData();
		    this.updateInfo();
		},


    }
</script>
<style>
	.mealContainer .search-nav{
		margin-top: 15px;
	}
	.mealContainer .el-input{
		width: auto;
	}
	.mealContainer .search-nav .el-button--default{
		background-color: #21d081;
		padding:10px 10px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -1px 0px 0px 0px #FFFFFF,  
		            1px 0px 0px 0px #FFFFFF,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/
	}
	.mealContainer .search-nav .el-icon-search{
		color: white;
		border: none;
	}
	.mealContainer .search-nav .el-select,.mealContainer .el-pager .el-select{
		width: 100px;
	}
	.mealContainer .el-form--inline{
		text-align: left;
	}
	.mealContainer .el-form-item__label{
		color: #ABACAE;
	}
	.mealContainer .page-nav button,.mealContainer .page-nav li{
		background-color: rgba(255,255,255,0);
	}
	.mealContainer .el-pager li.active{
		background-color:  #21d081;
		border-color:  #21d081;
		border-radius: 50%;
	}

	.mealContainer .info-table{
		background-color: white;
		border-radius: 5px;
		margin-bottom: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            1px 0px 1px  #C8C8C8,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/

	}
	.mealContainer .info-table img{
		position: relative;
		top:5px;
	}
	.mealContainer .info-table .el-col{
		line-height: 50px;
		min-height: 50px;
		height: auto;
	}
	.mealContainer .info-table>.el-row{
		border-bottom: 1px solid #F6F6F6;
	}
	.mealContainer .forbidden-span{
		background-color: #CACACA;
	}
	.mealContainer .startUse-span{
		background-color: #ECAD00;
	}
	.mealContainer .startUse-span,.mealContainer .forbidden-span{
		display: block;
		width: 50px;
		height: 30px;
		line-height: 30px;
		color:white;
		font-size: 14px;
		margin: 10px auto;
		border-radius: 5px;
	}
	.mealContainer .info-table a{
		color: #B5D7F6;
		display: inline-block;
		height: 20px;
		line-height: 20px;
	}
	.mealContainer .info-table img{
		margin-top: 5px;
	}
	.mealContainer .info-table .table-title{
		font-weight:500;
	}
	.mealContainer .btn-add:hover,.mealContainer .btn-add a:hover{
		color: white;
		border: none;
	}
	.mealContainer .btn-add a{
		color: white !important;
		text-decoration: none;
	}
	.mealContainer .search-nav div:last-child{
		float: right;
	}
	.mealContainer .el-popover{
		background-color: #F8F9E7;
	}

	.mealContainer .editDialog .dialog-footer button{
		width: 100px;
		box-shadow: 0px -1px 0px 0px #FFFFFF,
					 -1px 0px 0px 0px #FFFFFF, 
					 1px 0px 0px 0px #FFFFFF, 
					 0px 2px 1px #C8C8C8;
	}
	.mealContainer .editDialog .canel-btn{
		background-color: white;
		color:#C3C3C3;
	}
	.mealContainer .editDialog .canel-btn:hover{
		border-color: #C3C3C3;
	}
	.mealContainer .editDialog .el-dialog__footer {
		margin-bottom: 10px;
		text-align: center;
	}
	.mealContainer .editDialog .submit-btn{
		background-color: #1FD27D;
		border-color: #1FD27D;
	}
	.mealContainer .el-dialog{
		text-align: left;
	}
	.mealContainer .el-dialog--small{
		width: 40%;
		min-width: 445px;
	}

</style>