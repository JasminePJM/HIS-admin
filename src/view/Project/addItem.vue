<template>
	<div class="addItemApp">
		<div class="addItemContainer">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form-add-item">
			    <el-row><h4>&nbsp;新增项目</h4></el-row>
				<el-row>
					<el-col  :xs="8" :sm="8" :md="8" :lg="6" style="margin-right: 20px;">
					<el-form-item label="项目分类：" prop="projectClassify">
				    	<el-select  placeholder="请选择" v-model="ruleForm.projectClassify">
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
				<el-form-item label="项目名称：" prop="projectName">
		    		<el-input v-model="ruleForm.projectName"></el-input>
		  		</el-form-item>
				<el-form-item label="项目通用名：" prop="delivery">
		    		<el-input v-model="ruleForm.commonName"></el-input>
		  		</el-form-item>
		  		<el-form-item label="药品助记码：" prop="delivery" >
		    		<el-input v-model="ruleForm.rememberCode"></el-input>
		  		</el-form-item>
		  		<el-form-item label="规格：" prop="delivery">
		    		<el-input v-model="ruleForm.standard"></el-input>
		  		</el-form-item>
		  		<el-row class="limitRow">
					<el-col  :xs="8" :sm="8" :md="8" :lg="6" style="margin-right: 20px;">
					<el-form-item label="库存单位：" prop="inventory">
				    	<el-select  placeholder="请选择" v-model="ruleForm.inventory">
				      		<el-option label="区域一" value="shanghai"></el-option>
				      		<el-option label="区域二" value="beijing"></el-option>
				    	</el-select>
				  	</el-form-item>
				  	</el-col>
				  	<el-col  :xs="8" :sm="8" :md="8" :lg="6" style="margin-right: 20px;">
				    <el-form-item label="零售单位：" prop="retailPrice">
				    	<el-select  placeholder="请选择" v-model="ruleForm.retailPrice">
				      		<el-option label="区域一" value="shanghai"></el-option>
				      		<el-option label="区域二" value="beijing"></el-option>
				    	</el-select>
				  	</el-form-item>
				  	</el-col>
				  	<el-col  :xs="8" :sm="8" :md="8" :lg="6" style="margin-right: 20px;">
				  		<el-form-item label="1-=" prop="totalPrice">
		    		 		<el-input v-model="ruleForm.totalPrice"></el-input>
		  		    	</el-form-item>
				  	</el-col>
				</el-row>
				<el-row class="limitRow">
					<el-col  :xs="10" :sm="10" :md="8" :lg="4" style="margin-right: 20px;">
						<el-form-item label="诊所内执行：" prop="clinic" id="clinicLabel">
						    <el-switch on-text="" off-text  v-model="ruleForm.clinic"></el-switch>
						</el-form-item>
				  	</el-col>
				  	<el-col  :xs="10" :sm="10" :md="8" :lg="9" style="margin-right: 20px;">
				  		<el-form-item label="当前零售价（元）：" prop="presentPrice">
		    		 		<el-input v-model="ruleForm.presentPrice"></el-input>
		  		    	</el-form-item>
				  	</el-col>
				  	<el-col  :xs="10" :sm="10" :md="8" :lg="9" style="margin-right: 20px;">
				  		<el-form-item label="购进参考价（元）：" prop="referPrice">
		    		 		<el-input v-model="ruleForm.referPrice"></el-input>
		  		    	</el-form-item>
				  	</el-col>
				</el-row>
				<el-form-item label="备注：" prop="delivery">
			    	<el-input type="textarea" rows="5" cols="30" v-model="ruleForm.remark"></el-input>
			  	</el-form-item>	        
			</el-form>
			<el-button @click="submitItem" class="btn-save" >保存</el-button>
		</div>
	</div>
</template>
<script>
 	export default {
 		data() {
	      return {
	        ruleForm: {
	          	projectClassify: '',
	          	financeClassify: '',
	          	invoiceClassify: '',
	         	projectName: '',
	          	inventory: '',
	          	clinic: '',
	          	retailPrice: '',
	          	presentPrice:'',
	          	referPrice:'',
	          	totalPrice:'',
	          	rememberCode:'',
	          	commonName:'',
	          	standard:'',
	          	remark:'',
	          	delivery: false,
	        },
        	rules: {
		      	projectClassify: [
		        	{ required: true, message: '请选择项目分类', trigger: 'change' }
		      	],
          		financeClassify: [
            		{ required: true, message: '请选择财务分类', trigger: 'change' }
          		],
          		invoiceClassify: [
            		{ required: true, message: '请选择发票分类', trigger: 'change' }
          		],
          		projectName: [
            		{ required: true, message: '请输入项目名称', trigger: 'blur' },
         		],
          		retail: [
            		{ required: true, message: '请选择零售单位', trigger: 'change' }
          		],
          		inventory:[
            		{ required: true, message: '请选择库存单位', trigger: 'change' }
          		],
          		clinic: [
           			{ required: true, message: '请选择执行模式', trigger: 'change' }
          		],
          		retailPrice: [
            		{ required: true, message: '请填写金额', trigger: 'blur' }
          		],
          		presentPrice: [
            		{ required: true, message: '请填写金额', trigger: 'blur' }
          		],
          		referPrice: [
            		{ required: true, message: '请填写金额', trigger: 'blur' }
          		],
          		totalPrice: [
            		{ required: true, message: '请填写金额', trigger: 'blur' }
          		],

        	}
     	};
   	},
    methods: {
    	submitItem(){
    		console.log("新增项目: ",this.ruleForm);
    	}
      
    }
 }
</script>
<style>
	.addItemApp{
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 50px;
		min-height: 300px;
	}
	.addItemApp .el-breadcrumb__item:last-child .el-breadcrumb__separator,.addItemApp .el-breadcrumb__item:first-child .el-breadcrumb__separator {
    	display: none;
    }
	.addItemApp .el-breadcrumb {
	    line-height: 60px;
	    height: 60px;
	}
	.addItemApp .el-select-dropdown__list{
		padding-top: 0px !important;
		padding-bottom: 0px !important;

	}
	.form-add-item .limitRow .el-input{
		max-width: 200px;
	}

	.form-add-item .el-row .el-input input{
		max-width: 150px;
	}
	.form-add-item .el-select{
		max-width: 200px;
	}
	.form-add-item .el-form-item__label{
		text-align:left;
		width: auto !important;
	}
	.form-add-item #clinicLabel .el-form-item__label{
		width: 112px !important;
	}
   .form-add-item .el-input__inner{   /*mark*/
  		max-width: 300px;
    }

    .addItemContainer{
		margin: 20px 20px;
    }
    .addItemContainer .form-add-item{
     	text-align: left;
		background-color: white;
		padding-bottom: 40px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 5px;
		margin-bottom: 20px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -1px 0px 1px   #C8C8C8,  
		            1px 0px 1px  #C8C8C8,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/

	}
	.addItemContainer .btn-save{
		background-color: #21D081;
		border-color: #21D081;
		float: right;
		color: white;
		width:100px;
		margin-bottom: 20px;
	}
	.form-add-item .el-switch.is-checked .el-switch__core{
		background-color:  #21D081;
		border-color:  #21D081;
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