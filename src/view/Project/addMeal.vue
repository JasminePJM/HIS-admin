<template>
	<div class="addMealApp">
		<div class="addMealContainer">
			<el-form  :rules="rules" :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm form-add-meal" >
			    <el-row><h4>&nbsp;新增套餐</h4></el-row>
				<el-row>
					<el-col  :xs="8" :sm="8" :md="8" :lg="6" style="margin-right: 20px;">
					<el-form-item label="套餐分类：" prop="mealClassify">
				    	<el-select  placeholder="请选择" v-model="ruleForm.mealClassify">
				      		<el-option label="区域一" value="shanghai"></el-option>
				      		<el-option label="区域二" value="beijing"></el-option>
				    	</el-select>
				  	</el-form-item>
				  	</el-col>
				  	<el-col  :xs="8" :sm="8" :md="8" :lg="6" style="margin-right: 20px;">
				    <el-form-item label="财务分类：" prop="financeClassify">
				    	<el-select  placeholder="请选择" v-model="ruleForm.financeClassify">
				      		<el-option label="区域一" value="shanghai"></el-option>
				      		<el-option label="区域二" value="beijing"></el-option>
				    	</el-select>
				  	</el-form-item>
				  	</el-col>
				  	<el-col  :xs="8" :sm="8" :md="8" :lg="6" style="margin-right: 20px;">
				  	<el-form-item label="发票分类：" prop="invoiceClassify">
				    	<el-select  placeholder="请选择" v-model="ruleForm.invoiceClassify">
				      		<el-option label="普通发票" value="shanghai"></el-option>
				      		<el-option label="专用发票" value="beijing"></el-option>
				    	</el-select>
				  	</el-form-item>
				  	</el-col>
				</el-row>
				<el-form-item label="套餐名称：" prop="mealName">
		    		<el-input v-model="ruleForm.mealName"></el-input>
		  		</el-form-item>
				<el-form-item label="套餐通用名：" prop="delivery">
		    		<el-input v-model="ruleForm.commonName"></el-input>
		  		</el-form-item>
		  		<el-form-item label="套餐助记码：" prop="delivery" >
		    		<el-input v-model="ruleForm.rememberCode"></el-input>
		  		</el-form-item>
		  		<el-form-item label="默认执行科室：" prop="delivery">
			    	<el-select  placeholder="请选择" v-model="ruleForm.office">
			      		<el-option label="区域一" value="shanghai"></el-option>
			      		<el-option label="区域二" value="beijing"></el-option>
			    	</el-select>
				</el-form-item>
				<el-form-item label="备注：" prop="delivery">
			    	<el-input type="textarea" rows="5" cols="30" v-model="ruleForm.remark"></el-input>
			  	</el-form-item>
			  	<el-form-item label="关联项目：" prop="relateItem" class="associtedItem">
		    		<el-input v-model="ruleForm.relateItem"></el-input>
		    		<a class="a-add"><img src="../../assets/img/Project/25.png"></a>
		  		</el-form-item>	   
		  		<div class="list-table">
		  			<el-row v-for="list in listInfo" :key="1">
		  				<el-col :span="5" style="padding-left:10px;">
		  					{{list.name}}
		  				</el-col>
		  				<el-col :span="6">
		  					<label>数量：</label>
					    	<el-input v-bind:placeholder="list.count"></el-input>
		  				</el-col>
		  				<el-col :span="6">
		  					<label>折扣系数：</label>
		  				    <el-input v-bind:placeholder="list.discount"></el-input>
		  				</el-col>
		  				<el-col :span="5">
		  					折后价：{{list.price}}元
		  				</el-col>
		  				<el-col :span="2">
		  					<a><img src="../../assets/img/Project/17.png"></a>
		  				</el-col>
		  			</el-row>
		  		</div>
	  			<div class="totalDiv">合计：&nbsp;360元</div>
			</el-form>
			<el-button @click="submitMeal" class="btn-save" >保存</el-button>
		</div>
	</div>
</template>
<script>
 	export default {
 		data() {
            return {
            	listInfo: [
            		{
            			name:"B超（200元/次）",
            			count:1,
            			discount:1,
            			price:200
            		},
            		{
            			name:"B超（200元/次）",
            			count:1,
            			discount:0.8,
            			price:160
            		}
            	],
		        ruleForm: {
		        	mealClassify: '',
		          	financeClassify: '',
		          	invoiceClassify: '',
		          	mealName: '',
		         	rememberCode:'',
	          	    commonName:'',
		          	relateItem:'',
		          	office:'',
		          	remark:'',
		          	delivery: false,
		        },
		        rules: {
		            mealClassify: [
		                { required: true, message: '请选择套餐类型', trigger: 'change' }
		          	],
		          	financeClassify: [
		            	{ required: true, message: '请选择财务分类', trigger: 'change' }
		          	],
		          	invoiceClassify: [
		            	{ required: true, message: '请选择发票分类', trigger: 'change' }
		          	],
		          	mealName: [
		            	{ required: true, message: '请输入套餐名称', trigger: 'blur' }
		          	],
		         	relateItem: [
		         		{ required: true, message: '请输入关联项目', trigger: 'blur' }
		         	]
		        }
            };
        },
	   methods: {
    	 	submitMeal(){
    			console.log("新增项目: ",this.ruleForm);
    	    }
	   }
   }
</script>
<style>
	.addMealApp{
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 50px;
		min-height: 300px;
	}
	.addMealApp .el-breadcrumb__item:last-child .el-breadcrumb__separator,.addMealApp .el-breadcrumb__item:first-child .el-breadcrumb__separator {
    	display: none;
    }
	.addMealApp .el-breadcrumb {
	    line-height: 60px;
	    height: 60px;
	}
	.form-add-meal .list-table{
		border: 1px solid #bfcbd9;
		line-height: 50px;
		font-size: 16px;
		color:#C7C9CA;
	}
	.form-add-meal .list-table .el-input input{
		max-width: 100px;
		width: 100%;
		height: 100%;
	}
	.form-add-meal .list-table .el-input{
		display: inline-block;
	}
	.form-add-meal .list-table>.el-row{
		border-bottom: 2px solid #F6F6F6;
	}
	.form-add-meal .totalDiv{
		display: inline-block;
		float: right;
		margin-top: 10px;
		margin-right: 20px;
	} 

	.form-add-meal .el-row .el-input input{
		max-width: 150px;
	}
	.form-add-meal .el-select{
		max-width: 200px;
	}
	.form-add-meal .el-form-item__label{
		text-align:left;
		width: auto !important;
	}
	.form-add-meal #clinicLabel .el-form-item__label{
		width: 112px !important;
	}
   .form-add-meal .el-input__inner{   /*mark*/
  		max-width: 300px;
    }

    .addMealContainer{
		margin: 20px 20px;
    }
    .addMealContainer .form-add-meal{
     	text-align: left;
		background-color: white;
		padding-bottom: 50px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 5px;
		margin-bottom: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -1px 0px 1px   #C8C8C8,  
		            1px 0px 1px  #C8C8C8,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/

	}
	.addMealContainer .btn-save{
		background-color: #21D081;
		float: right;
		color: white;
		width:100px;
		margin-bottom: 20px;
	}
	

	/*add*/
	.form-add-meal .a-add img{
		display: inline-block;
		position: relative;
		top: 13px;
	}
	.form-add-meal .e-row .e-col{
		margin-right: 10px;
	}
	.list-table .el-input,.list-table .el-input__inner {
		max-width: 100px;
		width: 40%;
	} 
	.form-add-meal .el-input{
		width: auto;
	}
	.list-table a{
		position: relative;
		top:5px;
	}

	/*mark: 一旦加了外盒的class为前缀就失效*/
	.el-scrollbar .el-scrollbar  .el-select-dropdown__item.selected.hover,.el-scrollbar .el-select-dropdown__item.selected{
		background-color:  #21d081 !important;
	}
	.el-scrollbar__view{
		padding-bottom:0px;
		padding-top: 0px;
	}

</style>