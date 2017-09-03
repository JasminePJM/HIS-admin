<template>
	<div class="registerApp">
		<div class="registerContainer">
			<div class="topNav">
				<div>
					<div>
						<a href="/login"><i class="fa fa-user" style="padding-right:10px;"></i>返回登录</a>
					</div>
					<div>
						<a><img src="../assets/img/15.png">帮助</a>
					</div>
				</div>
			</div>
			<div class="mainContainer">
				<div>
					<div class="banner">
						<a><img src="../assets/img/98.png"></a>
						<li>注册机构</li>
					</div>
				</div>
				<div  class="tabNav" style="">
				  	<div class="tab-menu" style="display: inline-block;height: 40px;">
					  	<div   @click="selectTab=1" class="tabDiv">
							<div class="tabTitle1" :class="{greenBgcolor:selectTab==1}"></div><div class="sjx" :class="{greenBorderSjx:selectTab==1}"></div>
							<span class="titleSpan" :class="{whiteTitleSpan:selectTab==1}">服务协议</span>
						</div>
				  		<div   @click="selectTab=2" class="tabDiv" >
							<div class="tabTitle"  :class="{greenBorderTitle:selectTab==2}"></div><div class="sjx" :class="{greenBorderSjx:selectTab==2}"></div>
							<span class="titleSpan" :class="{whiteTitleSpan:selectTab==2}">提交诊所资质</span>
						</div>
				  		<div   @click="selectTab=3" class="tabDiv" > 
							<div class="tabTitle" :class="{greenBorderTitle:selectTab==3}"></div><div class="sjx" :class="{greenBorderSjx:selectTab==3}"></div>
						<span class="titleSpan" :class="{whiteTitleSpan:selectTab==3}">完成诊所信息</span>
						</div>
				  		<div   @click="selectTab=4" class="tabDiv" >
							<div class="tabTitle"  :class="{greenBorderTitle:selectTab==4}"></div><div class="sjx" :class="{greenBorderSjx:selectTab==4}"></div>
							<span class="titleSpan" :class="{whiteTitleSpan:selectTab==4}">注册管理员账号</span>
						</div>
				  	</div>
				</div>
			    <div class="tabPancel" style="margin-bottom:30px;"  v-show="selectTab==1">
					<div class="tab-pancel-item">
						<p style="color:orange;">更新时间:2017-03-06</p>
						<div>
							<p>百慧云诊所服条款</p>
							<p>欢迎您使用百慧云诊所！</p>
							<p style="line-height:28px;">本专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可实现人员与资源的合理分配，节约患者等待时间，推动医疗服务资源发挥最大效能，更好地辅助医院经营决策。
							</p>
							<p>1、账号</p>
							<p>A. 在使用本专家医生、医技设备、住院床位是医院最紧缺的医疗服务资源之一，全院统一预约管理系统可。</p>
						</div>
					</div>
					<el-checkbox class="agreeCheckbox" v-model="agreeItem">同意《百慧云诊所服务条款》</el-checkbox><br/>
					<button @click="confirmRead()" v-show="!showProgress">确定</button>
					<el-progress :text-inside="true" :stroke-width="18" v-bind:percentage="progressPercent" v-show="showProgress"></el-progress>
			    </div>
			    <div class="tabPancel2" style="margin-bottom:30px;" v-show="selectTab==2">
					<div class="tab-pancel-item">
						<div class="titleDiv">诊所信息</div>
						<el-form class="infoForm">
							<el-form-item label="诊所名称：">
				    			<el-input style="width:250px;" v-model="tabPancel2Info.name"></el-input>
				  			</el-form-item>
				  			 <el-form-item label="诊所类型：" prop="type">
							    <el-radio-group v-model="tabPancel2Info.type">
							        <el-radio label="公立"></el-radio>
							        <el-radio label="私营"></el-radio>
							    </el-radio-group>
							</el-form-item>
							<el-row>
								<el-col :span="6">
									<span>上传《医疗执业资格证》：（需清晰、完整）</span>
								</el-col>
								<el-col :span="12">
									<el-upload
									  	action="https://jsonplaceholder.typicode.com/posts/"
									  	list-type="picture-card"
									  	:on-success="handleImg1"
									>
									  	<i class="el-icon-plus"></i>
									</el-upload>
									<el-dialog  size="tiny" :on-success="handleImg1">
									  <img width="100%" :src="tabPancel2Info.img" alt="" >
									</el-dialog>
									<div style="min-height:50px;line-height:50px;height:auto;">
										<span style="color:#20a0ff;font-size:16px;"><i class="fa fa-cloud-upload"></i>上传图片</span>
									 	<span style="color:#C3C3C3;font-size:14px;">(支持扩展名：.jpg .png大小不超过4MB)</span>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="8" style="max-width:220px;">
									<span>《医疗执业资格证》有效期：</span>
								</el-col>
								<el-col :span="12">
									<el-form-item prop="date1">
								        <el-date-picker type="date" placeholder="选择日期" v-model="tabPancel2Info.date" style="width: 100%;"></el-date-picker>
								    </el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</div>
					<button @click="oneNext()">下一步</button>
			    </div>
			     <div class="tabPancel3" style="margin-bottom:30px;" v-show="selectTab==3">
					<div class="tab-pancel-item">
						<div class="titleDiv">完善诊所信息</div>
						<el-form class="infoForm">
							<el-row>
								<el-col :span="6">
									<span>诊所名称:</span>
								</el-col>
								<el-col :span="12">
									<el-row><span>{{tabPancel2Info.name}}诊所</span></el-row>
									<el-row>
										<el-upload
										  	action="https://jsonplaceholder.typicode.com/posts/"
										  	list-type="picture-card"
										  	style="height:80px;" :on-success="handleImg2">
										  	<i class="el-icon-plus"  style="position:relative;top:-30px;"></i>
										</el-upload>
										<el-dialog v-model="dialogVisible" size="tiny" :on-success="handleImg2">
										  <img width="100%" :src="dialogImageUrl" alt="">
										</el-dialog>
										<div style="min-height:40px;line-height:40px;height:auto;">
											<span style="color:#20a0ff;font-size:16px;"><i class="fa fa-cloud-upload"></i>上传logo</span>
										 	<span style="color:#C3C3C3;font-size:14px;">(支持扩展名：.jpg .png大小不超过4MB)</span>
										</div>
									</el-row>
								</el-col>
							</el-row>
							<el-form-item label="集团性质：" prop="type" style="margin-bottom: 0px;">
							    <el-radio-group  v-model="tabPancel3Info.type1">
							        <el-radio label="连锁集团"></el-radio>
							        <el-radio label="单体诊所"></el-radio>
							    </el-radio-group>
							</el-form-item>
							 <el-form-item label="医保定点：" prop="type">
							    <el-radio-group  v-model="tabPancel3Info.type2">
							        <el-radio label="已有医保"></el-radio>
							        <el-radio label="正在申请"></el-radio>
							        <el-radio label="不会接入医保"></el-radio>
							    </el-radio-group>
							</el-form-item>
							<el-form-item label="营业时间：">
				    			<el-input style="width:250px;"  v-model="tabPancel3Info.time"></el-input>
				  			</el-form-item>
				  			<el-form-item label="诊所电话：">
				    			<el-input style="width:250px;" v-model="tabPancel3Info.tel"></el-input>
				  			</el-form-item>
				  			<el-form-item label="诊所地址: ">
				    			<el-select  v-model="tabPancel3Info.address" clearable placeholder="请选择" stylw="width:100px;">
								    <el-option
									    v-for="item in options"
									    :key="item.value"
									    :label="item.label"
									    :value="item.value">
								    </el-option>
								</el-select>
								<el-select v-model="tabPancel3Info.address" clearable placeholder="请选择" stylw="width:100px;">
								    <el-option
									    v-for="item in options"
									    :key="item.value"
									    :label="item.label"
									    :value="item.value">
								    </el-option>
								</el-select>
								<el-input style="width:150px;" v-model="tabPancel3Info.detailAdr"></el-input>
				  			</el-form-item>
						</el-form>
					</div>
					<button @click="secondNext()">下一步</button>
			    </div>
			    <div class="tabPancel4" style="margin-bottom:30px;" v-show="selectTab==4">
					<div class="tab-pancel-item">
						<div class="titleDiv">管理员登记</div>
						<el-form  label-width="80px">
					  		<el-form-item label="真实姓名：" >
					   			<el-input placeholder="请输入您的真实姓名，以便联系" v-model="tabPancel4Info.name"></el-input>
					   			<label  role="colored" v-if="tabPancel4Info.name===''"></label>
					   			<label  role="colored" v-else-if="tabPancel4Info.name.length<2">请输入正确的名字</label>
					   			<label  role="colorgreen" v-else><i class="fa fa-check-circle " ></i></label>
					  		</el-form-item>
					  		<el-form-item label="联系电话：">
					    		<el-input placeholder="请输入您常用的手机号码，以便联系" v-model="tabPancel4Info.tel"></el-input>
					  		</el-form-item>
					  		<el-form-item label="联系邮箱：">
					    		<el-input placeholder="请输入您常用的电子邮箱，以便联系" v-model="tabPancel4Info.email"></el-input>
					    		<label  role="colored" v-if="tabPancel4Info.email===''"></label>
					   			<label  role="colored" v-else-if="!emailre.test(tabPancel4Info.email)">请输入正确的邮箱格式</label>
					   			<label  role="colorgreen" v-else><i class="fa fa-check-circle " ></i></label>
					  		</el-form-item>
					  		<el-form-item label="设置用户名：">
					    		<el-input placeholder="设置您的登录账号名，请使用大小写字母、数字组合" v-model="tabPancel4Info.username"></el-input>
					  		</el-form-item>
					  		<el-form-item label="设置密码：">
					    		<el-input placeholder="设置您的登录密码，请使用6~16位大小写字母、数字组合" v-model="tabPancel4Info.pwd" type="password"></el-input>
					  		</el-form-item>
					  		<el-form-item label="重复密码：">
					    		<el-input placeholder="重复输入您设置的登录密码" v-model="tabPancel4Info.secondPwd" type="password"></el-input>
					    		<label  role="colored" v-if="tabPancel4Info.secondPwd===''"></label>
					   			<label  role="colored" v-else-if="tabPancel4Info.secondPwd!==tabPancel4Info.pwd">两次密码不一样！</label>
					   			<label  role="colorgreen" v-else><i class="fa fa-check-circle " ></i></label>
					  		</el-form-item>

						</el-form>
					</div>
					<button @click="Complete">完成</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	/*import tabDiv from '../components/tabDiv';*/
	export default {
 		data() {
     		return {
     			emailre:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
     			agreeItem:false,
     			showProgress:false,
     			progressPercent:0,
     			selectTab: 1,
     			dialogImageUrl: '',
        		dialogVisible: false,
		        ruleForm: {
		          	date1: '',
		          	type: '',
		        },
		        tabPancel2Info: {
		        	name:'',
		        	type:'',
		        	img:'',
		        	date:'',
		        },
		        tabPancel3Info: {
		        	type2:'',
		        	type1:'',
		        	img:'',
		        	time:'',
		        	tel:'',
		        	address:'',
		        	detailAdr:'',

		        },
		         tabPancel4Info: {
		        	name:'',
		        	tel:'',
		        	email:'',
		        	username:'',
		        	pwd:'',
		        	secondPwd:'',
		        },
	     		rules: {
		       
		        },
		        options: [
		        	{
	          			value: '广东省',
	          			label: '广东省'
        		   	},
        		   	{
				        value: '海南省',
				        label: '海南省'
    				}, 
    				{
			           value: '广西省',
			           label: '广西省'
                    }
                ],
                value: '',
	    	}
		},
		methods: {
			confirmRead(){
				if(!this.agreeItem){
					this.$message({
				          message: '警告，请同意我们的条款！',
				          type: 'warning'
				        });
					return;
				}
				this.showProgress=true;
				var data=this;
				var that=this;
				var interval=setInterval(function(){
					if(data.progressPercent<100)
						data.progressPercent+=10;
					else {
						that.selectTab=2;
						clearInterval(interval);
					}
				},1000);
			},
			oneNext(){
		        this.selectTab=3;
				console.log("提交诊所资质：",this.tabPancel2Info);
				console.log("提交诊所资质的格式化年份：",this.tabPancel2Info.date.getFullYear());
			},
			secondNext(){
		        this.selectTab=4;
				console.log("完善诊所信息：",this.tabPancel3Info);
			},
			Complete(){
				let that=this;
				let isEmail=this.emailre.test(this.tabPancel4Info.email);
				if(this.tabPancel4Info.pwd!==this.tabPancel4Info.secondPwd || this.tabPancel4Info.name.length<2 || !isEmail){
					this.$notify.warning({
			          	title: '警告',
			          	message: '警告，请填写正确格式的信息!',
			         	offset: 100,
		        	});
				}
				else{
					this.$notify.success({
			          	title: '成功',
			          	message: '请到控制台中查看注册信息！',
			         	offset: 100,
			        });
					console.log("管理员登记：",this.tabPancel4Info);
					that.$router.push({path: '/login'});
				}
			},
			handleImg1(res, file) {
		        this.tabPancel2Info.img = URL.createObjectURL(file.raw);
		    },
		    handleImg2(res, file) {
		        this.tabPancel3Info.img = URL.createObjectURL(file.raw);
		    },
	        beforeAvatarUpload(file) {
	        	const isJPG = file.type === 'image/jpeg';
	        	const isLt2M = file.size / 1024 / 1024 < 2;

	        	if (!isJPG) {
	          		this.$message.error('上传头像图片只能是 JPG 格式!');
	        	}
	        	if (!isLt2M) {
	          		this.$message.error('上传头像图片大小不能超过 2MB!');
	        	}
	        	return isJPG && isLt2M;
	      	}
		},
	}

</script>
<style>
	.registerContainer{
		background-color: #F6F6F6;
		width:86%;
		margin: 0 auto;
	}
	.registerContainer>*,.mainContainer>*{
		margin-bottom: 30px;
	}
	.registerContainer .topNav{
		height: 50px;
		background-color: white;
		line-height: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            -2px 0px 1px   #FFFFFF,    
	                0px 1px 1px #C8C8C8;    /*下边阴影*/
	}
	.registerContainer .topNav img{
		position: relative;
		top:5px;
	}
	.registerContainer .topNav>div{
		display: inline-block;
		width: auto;
		float: right;
		padding-right: 30px;
	}
	.registerContainer .topNav>div div{
		padding-right: 20px;
		display: inline-block;
	}
	.registerContainer .mainContainer{
		background-color: #F6F6F6;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            -2px 0px 1px   #FFFFFF,    
	                0px 1px 1px   #FFFFFF,      /*下边阴影*/
	}
	.registerContainer .mainContainer>div{
		margin-right: 50px;
		margin-left: 50px;
		text-align: left;
	}
	.registerContainer .mainContainer .banner li{
		display: inline-block;
		margin-left: 30px;
		font-size: 20px;
	}
	.registerApp .mainContainer .tab-menu .tab-item{
		width: 23%;
		text-align: left;
		display: inline-block;
		color: #C7C7C7;
	}
	.registerApp .mainContainer .tabNav .tab-menu{
		width: 100%;
		min-height: 40px;
		height: auto;
		line-height: 40px;
		background-color: #EEEEEE;
	}
	.registerApp .mainContainer .triangle{
		border: 20px solid;
		border-color:  transparent  transparent transparent #000;
		width: 0;
		display: inline-block;
	}
	.registerApp .mainContainer .tab-pancel-item{
		background-color: white;
		padding-left: 20px; 
		padding-right: 20px;
		height: 450px;
		overflow: auto;
		margin-bottom: 50px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -2px 0px 1px   #FFFFFF,  
		            1px 0px 1px  #C8C8C8,  
	                0px 2px 1px #C8C8C8;    /*下边阴影*/
	}
	.registerApp button{
		width: 30%;
		max-width: 250px;
		background-color: #21D081;
		color: white;
		height: 40px;
		font-size: 16px;
		margin: 30px auto;
		display: block;
		letter-spacing: 8px;
		border: none;

	}
	.registerApp .mainContainer .el-checkbox__input.is-checked .el-checkbox__inner{
		background-color: #21D081;
		border-color:  #21D081;
	}
	.registerApp .mainContainer .titleDiv{
		height: 40px;
		line-height: 40px;
		/* border-bottom: 1px solid  #C8C8C8; */
	}
	 .el-date-table td.today:before {
		border-top: .5em solid #21D081 !important;
	}
	.el-date-table td.current:not(.disabled){
		background-color: #21D081 !important;
	}
	.registerApp .infoForm{
		width: 70%;
		margin: 0 auto;
	}
	.tabPancel3 .el-upload--picture-card{
		height: 80px;
	}
	.registerApp .tabPancel3  .el-upload-list__item, .registerApp .is-success{
		height: 80px !important;
	}
	.tabPancel4 .el-form-item__label{
		min-width: 100px;
		width: auto;
	}
	.tabPancel4 .el-form-item__content{
		width: 50%;
		max-width: 350px;
		margin-left: 100px !important;
	}
	.tabPancel4  .el-form{
		width: 80%;
		margin: 0 auto;
	}
	.registerApp .el-progress-bar__outer{
		height:  38px !important;
		width: 30%;
		max-width: 250px;
		background-color: #DBDBDB;
		margin: 30px auto;
		border-radius: 0px;
	}
	.registerApp .el-progress-bar__inner{
		background-color: #CCCCCC;
		border-radius: 0px;
	}
	.registerApp a{
		color: #2c3e50;
	}
	.registerApp .tabDiv{
    	display: inline-block;
    	position: relative;
    /* 	color: #C7C7C7; */
    	width:24.5%;
    	min-width: 220px;
    	height: 40px;
    }
	.registerApp .tabDiv .tabTitle{
		width:120px;
		border: 20px solid;
		border-color:  #EEEEEE #EEEEEE #EEEEEE transparent;
		display: inline-block;
	}
	.registerApp .tabDiv .tabTitle1{
		width: 160px;
		height: 40px;
		display: inline-block;
		background-color:#EEEEEE;
	}
	.registerApp .tabDiv  .sjx{
		border: 20px solid;
		border-color: transparent transparent transparent #EEEEEE;
		width: 0px;
		display: inline-block;
	}
	.greenBgcolor{
		background-color:#21D081 !important;
	}
	.greenBorderTitle{
		border-color:  #21D081 #21D081 #21D081 transparent !important;
	}
	.greenBorderSjx{
		border-color: transparent transparent transparent #21D081  !important;
	}
	.tabDiv  .titleSpan{
		position: absolute;
		z-index: 10;
		top:0px;
		left: 40px;
		color: #C7C7C7;
	}
	.tabDiv .whiteTitleSpan{
		color: white !important; 
	}
	[role=colored] {
    	color: red;;
    	font-size: 14px ;
    }
    [role=colorgreen] {
    	color: #13ce66;;
    }
</style>