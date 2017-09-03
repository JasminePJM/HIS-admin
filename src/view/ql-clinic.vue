<template>
	<div class="ql-clinic">
		<el-tabs type="border-card">
		<!-- el-tab-pane 第一个 -->
		  <el-tab-pane label="基本信息">
			<div class="basic">
				<el-col :xs="6" :sm="6" :md="6" :lg="6">
					<div class="clinic-img">
						<div class="user-img">
							<img src="../assets/image/logo03.png">
							<div class="clinic-uploder">
								<button type="button" class="ql-button el-button filter-item el-button--priamary" style="margin-top:10px;">
									<i class="el-icon-upload2"></i>
									修改logo
								</button>
							</div>
						</div>
					</div>
				</el-col>
				<!-- 简介 -->
				<el-col :xs="18" :sm="18" :md="18" :lg="18" class="clinic-introduction">
					
						<div class="intro-header ql-intro">
							<el-col :xs="24" :sm="24" :md="24" :lg="24">
								<p>爱康口腔牙科诊所
									<span class="bianma">集团编码：10000</span>
								</p>
							</el-col>
							<el-col :xs=" 24" :sm="24" :md="24" :lg="24">
								<p style="color:#d1d1d1">服务有效期至
									<span style="color:#F29930">2018年3月28日</span>
								</p>
							</el-col>							
						</div>
						<div class="intro-content ql-intro">
							<el-col :xs="24" :sm="24" :md="24" :lg="24">
								<p style="color:#d1d1d1;    margin-bottom: 120px;">简介：
									<div style="color:#8391a5; padding: 10px;text-align:left;">爱康口腔自2004年开业，即采用国际著名牙科设备制造商德国西诺德（SIRONA）品牌尚未全套医疗设备，实现整体化、全数字化、低辐射尚未全面口腔诊治，达到缩短治疗时间、减低疼痛、及消除交叉感染的目的。先进的技术和服务可以帮您解决牙科各个领域的问题，提供一步到位的全面解决方案，为您的口腔健康保驾护航。
									<br />
									......
									</div>
								</p>
							</el-col>
						</div>
					
				</el-col>
				<!-- 门店信息 表格 -->
				<el-col :xs="24" :sm="24" :md="24" :lg="24">
					<el-table :data="storeInfo" border style="width: 100%;overfloat:hidden;">
					    <el-table-column  prop="number" label="编号" width="80">
					    </el-table-column>
					    <el-table-column prop="name" label="门店名称" width="120">
					    </el-table-column>
					    <el-table-column prop="time" label="营业时间" width="350">
					    </el-table-column>
					    <el-table-column prop="tel" label="电话" width="150">
					    </el-table-column>
					    <el-table-column prop="address" label="地址" width="345">
					    </el-table-column>
					    <el-table-column label="操作" width="100">
					      <template scope="scope">
					        <el-button @click="" type="text" size="small" icon="edit">编辑</el-button>
					      </template>
					    </el-table-column>
					  </el-table>
				</el-col>
				
			</div>
					<!-- 脚部-分页 -->
				<el-pagination
				    @size-change="handleSizeChange"
				    @current-change="handleCurrentChange"
				    :current-page="currentPage4"
				    :page-sizes="[10, 20, 30, 40]"
				    :page-size="10"
				    layout="total,->,prev,pager,next,sizes,jumper"
				    :total="50">
				</el-pagination>
			
		  </el-tab-pane>
		  <!-- el-tab-pane 第一个 结束-->

		  <!-- el-tab-pane 第二个 -->
		  <el-tab-pane label="科室信息">
		  	<div class="office">
		  	<!-- 左边 -->
		  		<el-col :xs="4" :sm="4" :md="4" :lg="4" class="ql-right" >
		  			<div class="office-character" style="margin-bottom:20px" >
		  				<el-table :data="officeChar" class="boxShadow"  style="width: 100%">
		  				    <el-table-column prop="officechar" label="科室性质" width="185"font-size="24px">
		  				    </el-table-column>
		  				</el-table>
		  			</div>
		  			<div class="office-classes">
		  				<el-table :data="officeClass" class="boxShadow"  style="width: 100%">
		  				    <el-table-column prop="officeclass" label="科室类别" width="185"font-size="24px">
		  				    </el-table-column>
		  				</el-table>
		  			</div>
		  		</el-col>
		  		<!-- 右边 -->
		  		<el-col :xs="19" :sm="19" :md="19" :lg="19" class="ql-left boxShadow" >

		  			<p style="height: 38px;">全部科室
		  				<el-button style="float:right;" type="success" @click="dialogFormVisible = true">新增科室</el-button>





		  			</p>

		  			<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">


		  			    <el-submenu index="1">	    
		  			        <template slot="title">儿科
		  			        	<span class="icon icon-add"></span>
		  			        	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			        	<span style="float:right;"><i class="icon icon-check"></i><button class="button-none" @click="dialogVisible = true">查看</button></span>
		  			        </template>

		  			        <el-menu-item-group class=" bg-fff">
		  			          <el-menu-item class="pd0 bg-fff" index="1-1">全部科室
		  			          	<i class="icon icon-add2"></i>
		  			          	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			          	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			          </el-menu-item>
		  			          <el-menu-item class="pd0 bg-fff" index="1-2">小儿儿科
		  			          	<i class="icon icon-add2"></i>
		  			          	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			          	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			          </el-menu-item>
		  			        </el-menu-item-group>    
		  			    </el-submenu>


		  			    <el-submenu index="2">
		  			        <template slot="title">内科
		  			        	<span class="icon icon-add"></span>
		  			        	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			        	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			        </template>
		  			        <el-menu-item-group class="bg-fff">
		  			          <el-menu-item index="2-1" class="pd0 bg-fff">内科一科</el-menu-item>
		  			          <el-menu-item index="2-2" class="pd0 bg-fff">内科二科</el-menu-item>
		  			        </el-menu-item-group>    
		  			    </el-submenu>


		  			    <el-menu-item index="3">产科
		  			    	<span class="icon icon-add"></span>
		  			    	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			    	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			    </el-menu-item>


		  			    <el-menu-item index="4">骨科
		  			    	<span class="icon icon-add"></span>
		  			    	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			    	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			    </el-menu-item>


		  			    <el-submenu index="5">
		  			        <template slot="title">治疗室
		  			        	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			        	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			        </template>
		  			        <el-menu-item-group class="bg-fff">
		  			          <el-menu-item index="5-1" class="pd0 bg-fff">治疗室一
		  			          	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			          	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			          </el-menu-item>
		  			          <el-menu-item index="5-2" class="pd0 bg-fff">治疗室二
		  			          	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			          	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			          </el-menu-item>
		  			        </el-menu-item-group>    
		  			    </el-submenu>


		  			    <el-menu-item index="6">药房
		  			    	<span style="float:right;"><i class="icon icon-add2"></i>添加子科室</span>
		  			    	<span style="float:right;"><i class="icon icon-check"></i>查看</span>
		  			    </el-menu-item>
		  			</el-menu>
		  			  
		  		</el-col>



		  	</div>
		  </el-tab-pane>
		  <!-- el-tab-pane 第二个 结束-->


		  <!-- el-tab-pane 第三个 -->
		  <el-tab-pane label="人员信息">
			<div class="personal">
				<div style="margin-bottom: 20px;">
					所属科室：
					<el-select  class="filter-item" style="width: 100px" v-model="listQuery.type" placeholder="请选择">
					  <el-option v-for="item in  typeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key">
					  </el-option>
					</el-select>
					用户类型：
					<el-select  class="filter-item" style="width: 100px" v-model="listQuery.type" placeholder="请选择">
					  <el-option v-for="item in  typeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key">
					  </el-option>
					</el-select>
					姓名：
					<el-input @keyup.enter.native="handleFilter" style="width: 120px;" class="filter-item" placeholder="请输入姓名" v-model="listQuery.title">
					</el-input>

					<el-button class="filter-item" type="success" v-waves icon="search" @click="handleFilter"></el-button>

					<el-button style="float:right;" type="success" @click="dialogForm1Visible = true">新增人员</el-button>
				</div>

				<div>
					<!-- 表格 -->
					<el-table   :data="list"   border fit highlight-current-row  >
					    

					      <el-table-column  align="center" label='序号' width="80">
					        <template scope="scope">
					          {{scope.$index}}
					        </template>
					      </el-table-column>

					      <el-table-column label="所属科室" width="">
					        <template scope="scope">
					          {{scope.row.officeName}}
					        </template>
					      </el-table-column>

					      <el-table-column label="姓名" width="">
					        <template scope="scope">
					          <span>{{scope.row.personalName}}</span>
					        </template>
					      </el-table-column>

					      <el-table-column label="性别"  align="center" width="80">
					        <template scope="scope">
					          {{scope.row.sex}}
					        </template>
					      </el-table-column>

					      <el-table-column align="center" prop="created_at" label="联系方式" width="">
					        <template scope="scope">
					          <span>{{scope.row.tel}}</span>
					        </template>
					      </el-table-column>

					        <el-table-column align="center"  label="登录账号" >
					            <template scope="scope">
					              <!-- <i class="el-icon-time"></i> -->
					              <span>{{scope.row.loginName}}</span>
					            </template>
					        </el-table-column>

					        <el-table-column align=""  label="最近一次登陆时间" width="180" >
					            <template scope="scope">
					              <span>{{scope.row.loginTime}}</span>
					            </template>
					        </el-table-column>

					        <el-table-column align="center"  label="操作" >
					            <template scope="scope">
					                
					               <el-button class="button-none pd0 blue fs14" size="small" @click="handleEdit(scope.$index, scope.row)"><i class="icon icon-check"></i>修改</el-button>
					               <el-button class="button-none pd0 blue fs14" size="small" @click="handleDelete(scope.$index, scope.row)"><i class="icon icon-check"></i>删除</el-button>
					                     
					            </template>
					        </el-table-column>
					</el-table>
				</div>
			</div>
				<!-- 脚部-分页 -->
			<el-pagination
				type="success"
			    @size-change="handleSizeChange"
			    @current-change="handleCurrentChange"
			    :current-page="currentPage4"
			    :page-sizes="[10, 20, 30, 40]"
			    :page-size="10"
			    layout="total,->,prev,pager,next,sizes,jumper"
			    :total="50">
			</el-pagination>
		  </el-tab-pane>
		  <!-- el-tab-pane 第三个 结束-->

		</el-tabs>

		<!-- 新增科室 弹窗 -->
		<el-dialog title="新增科室" :visible.sync="dialogFormVisible">
		      <el-form class="small-space" :model="newOffice" label-position="left" label-width="85px" style='width: 500px; margin-left:50px;'>
		     
		
		        <el-form-item  label="科室名称:" prop="name" :rules="[ { required: true} ]">
		            <el-input v-model="newOffice.officeName"></el-input>
		          </el-form-item>

		        <el-form-item label="科室类型:" :rules="[ { required: true} ]">
		          <el-input v-model="newOffice.officeClass"></el-input>
		        </el-form-item>

		        <el-form-item label="       ">
		            <el-checkbox-group v-model="newOffice.isGuahao">
		              <el-checkbox label="属于挂号科室" name="type"></el-checkbox>
		            </el-checkbox-group>
		          </el-form-item>



		        <el-form-item label="备注：" prop="desc">
		            <el-input :rows="5" type="textarea" v-model="newOffice.beizhu"></el-input>
		          </el-form-item>

		       
		      </el-form>

		      <div slot="footer" class="dialog-footer">
		        <el-button @click="dialogFormVisible = false">取 消</el-button>
		       
		        <el-button type="success" @click="handleCreateSubmit">确 定</el-button>
		      </div>
		</el-dialog>
		<!-- 查看弹窗 -->
		<el-dialog title="提示" :visible.sync="dialogVisible" size="tiny">
		  <div>
		  	<p>上级科室：儿科</p>
		  	<p>科室名称：儿童保健科</p>
		  	<p>科室类别：医疗科室</p>
		  	<p>备注：无</p>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="success" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>

		<!-- 新增人员 -->
		<el-dialog title="新增人员" :visible.sync="dialogForm1Visible">
		    <el-form class="small-space" :model="newPerson" label-position="left" label-width="85px" style='width: 500px; margin-left:50px;'>
		     
		
		        <el-form-item  label="登录名:" prop="name" :rules="rules2">
		        	<el-col :span="13">
		            	<el-input v-model="newPerson.loginName"></el-input>
		            </el-col>
		          </el-form-item>

		        <el-form-item label="密码" prop="pass"  :rules="rules2">
		        	<el-col :span="13">
		            	<el-input type="password" v-model="newPerson.pass" auto-complete="off"></el-input>
		            </el-col>
		        </el-form-item>

		        <el-form-item label="确认密码" prop="checkPass"  :rules="rules2">
		        	<el-col :span="13">
		            	<el-input type="password" v-model="newPerson.checkPass" auto-complete="off"></el-input>
		            </el-col>
		        </el-form-item>

		    </el-form>
		     
		    <p style="font-size:16px;font-weight: bold;">用户信息</p>

		    <el-form class="small-spac" :model="newPerson" label-position="left" label-width="85px" style="width:500px;margin-left:50px;">

		    	<el-form-item label="用户类别" prop="userClassify" :rules="rules2">
		    		<el-select v-model="newPerson.userClassify">
		    			<el-option label="医生" value="doctor"></el-option>
		    			<el-option label="护士" value="nuser"></el-option>
		    		</el-select>
		    	</el-form-item>


		    	<el-form-item label="所属科室" prop="userOffice" :rules="rules2">
		    		<el-select v-model="newPerson.userOffice">
		    			<el-option label="儿科" value="erke"></el-option>
		    			<el-option label="产科" value="chanke"></el-option>
		    			<el-option label="内科" value="neike"></el-option>
		    			<el-option label="骨科" value="guke"></el-option>
		    		</el-select>
		    	</el-form-item>


		    	<el-form-item label="出诊科室" prop="userWorkoffice" :rules="rules2">
		    		<el-select v-model="newPerson.userWorkoffice">
		    			<el-option label="儿科" value="erke"></el-option>
		    			<el-option label="产科" value="chanke"></el-option>
		    			<el-option label="内科" value="neike"></el-option>
		    			<el-option label="骨科" value="guke"></el-option>
		    		</el-select>
		    	</el-form-item>


		    	<el-form-item label="挂号类型" prop="userGuahao">
		    		<el-select v-model="newPerson.userGuahao">
		    			<el-option label="门诊" value="menzhen"></el-option>
		    			<el-option label="专家" value="zhuanjia"></el-option>
		    		</el-select>
		    	</el-form-item>

		    	<el-form-item label="姓名" prop="userName" :rules="rules2">
		    		<el-col :span="13">
						<el-input v-model="newPerson.userName"></el-input>
					</el-col>
		    	</el-form-item>

		    	<el-form-item label="性别" prop="userSex"  :rules="rules2">
		    		<el-radio-group v-model="newPerson.userSex">
		    			<el-radio label="男" value="man"></el-radio>
		    			<el-radio label="女" value="women"></el-radio>
		    		</el-radio-group>
		    	</el-form-item>

		    	<el-form-item label="出生日期" prop="userBirth">
		    		<el-form-item prop="birthday">
		    			<el-date-picker type="date" v-model="newPerson.birthday"></el-date-picker>
		    		</el-form-item>
		    	</el-form-item>

		    	<el-form-item label="电话" prop="userTel">
		    		<el-col :span="13">
						<el-input v-model="newPerson.userTel"></el-input>
					</el-col>
		    	</el-form-item>

		    	<el-form-item label="备注：" prop="desc">
		    		<el-col :span="13">
						<el-input :rows="5" type="textarea" v-model="newPerson.beizhu"></el-input>
					</el-col>
		        </el-form-item>

		    </el-form>

		    <div slot="footer" class="dialog-footer">
		        <el-button @click="dialogForm1Visible = false">取 消</el-button>
		       
		        <el-button type="success" @click="submitForm('ruleForm2')">确 定</el-button>
		    </div>
		</el-dialog>


	</div>
</template>




<script>
    import { api } from '@/global/api.js'//引入静态资源
	import 	Vue from 'vue'
	export default{	
		data:function(){

				var validatePass = (rule, value, callback) => {
				        if (value === '') {
				          callback(new Error('请输入密码'));
				        } else {
				          if (this.newPerson.checkPass !== '') {
				            this.$refs.newPerson.validateField('checkPass');
				          }
				          callback();
				        }
				      };
				      var validatePass2 = (rule, value, callback) => {
				        if (value === '') {
				          callback(new Error('请再次输入密码'));
				        } else if (value !== this.newPerson.pass) {
				          callback(new Error('两次输入密码不一致!'));
				        } else {
				          callback();
				        }
				      };

			


			return {


				storeInfo:[{
					number:'010',
					name  :'珠江新城店',
					time  :'周一至周五08:30~21:00,周末14:00~21:00',
					tel   :'020-87000000',
					address:'广州市白云区广州大道中345号'
				},{
					number:'020',
					name  :'琶洲店',
					time  :'周一至周五08:30~21:00,周末14:00~21:00',
					tel   :'020-81456564',
					address:'广州市海珠区新港东路5号'
				},{
					number:'030',
					name  :'江南新店',
					time  :'周一至周五08:30~21:00,周末14:00~21:00',
					tel   :'020-84302585',
					address:'广州市海珠区江南大道中3号'
				}],


				officeChar:[{
					officechar:'可挂号科室（16）'
				},{
					officechar:'停用科室（0）'
				},{
					officechar:'其他科室（0）'
				},{
					officechar:''
				},{
					officechar:''
				}],



				officeClass:[{
					officeclass:'医疗科室（16）'
				},{
					officeclass:'职能科室（2）'
				},{
					officeclass:'临床科室（1）'
				},{
					officechar:''
				},{
					officechar:''
				}],


				typeOptions:[
				  { key: '001', display_name: '类型1' },
				  { key: '002', display_name: '类型2' },
				  { key: '003', display_name: '类型3' }
				 
				],


				listQuery: {
				    currPage: 1,
				    pageSize: 10,

				    // importance: undefined,
				    title: '',
				    type: null,//类型
				       
				},


				newOffice: {
				    "officeName": "",
				    "officeClass": "",
				    "isGuahao": "",
				    "beizhu": ""
				},

				newPerson:{
					"loginName":"",
					"pass":"",
					"checkPass":"",
					"":"",
					"":"",
					"":"",
					"":"",
					"":""

				},
				rules2: {
					required: true,
				    pass: [
				        { validator: validatePass, trigger: 'blur' }
				    ],
				    checkPass: [
				        { validator: validatePass2, trigger: 'blur' }
				    ],
				    userSex: [
				        { required: true, message: '请选择活动资源', trigger: 'change' }
				    ],
				},


				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4,

				dialogFormVisible:false,
				dialogForm1Visible:false,
				dialogVisible:false,
				listLoading: true,
				list:null , 

				pass:'',
				checkPass:'',

			};


		},
		methods: {
		      handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		      },
		      handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      },
		      handleOpen(key, keyPath) {
		              console.log(key, keyPath);
		            },
		            handleClose(key, keyPath) {
		              console.log(key, keyPath);
		            },

		       handleFilter() {
		         this.getList();
		       },
		       handleSelectionChange(val) {
		           this.multipleSelection = val;
		       },
		       //新增提交
		       handleCreateSubmit(){
		           var vm = this;
		           console.log('新增入参：',vm.temp,vm.list)

		           //这里作演示用，正式新增 请提交到接口
		           vm.list.push(vm.temp)
		           console.log('新增后',vm.list)
		           
		           this.dialogFormVisible = false;
		       },


		      // 新增科室
		      addOffice(){
		      	this.dialogFormVisible = true;	
		      },

		      //获取动态数据（json也有可能接口）
		      getData:function(){
		      	let me = this;

		      	Vue.http.get(api.clinicData).then(function(response){

		      		me.list = response.data.data.personalInfo;

		      	}, function(response){
		      		alert("JSON文件请求失败了")
		      	})
		      }
		},
		mounted() {
		  var vm = this;

		  vm.getData();



		},

	}
</script>

<style>
 .ql-clinic .blue{
 	color: #1d90e6;
 }
.ql-clinic .fs14{
	font-size: 14px;
}
.ql-clinic .button-none{
	background: none;
    border: 0px;
}
.ql-clinic .bg-fff{
	background: #fff;
}
.ql-clinic .bg-fff :hover{
	background: #fff;
}
.ql-clinic .boxShadow{
	box-shadow: 2px 2px 1px #dedede;
}
.ql-clinic .pd0{
	padding: 0;
}
/*basic*/
.ql-clinic .el-tabs--border-card {
    border-radius: 5px;
}
.ql-clinic .el-tabs__header {
    box-shadow: 0px 2px 1px #dedede;
    border-radius: 5px;
}
.ql-clinic .el-tabs__nav-scroll {
    border-radius: 5px;
}
.ql-clinic .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #21D081;
}
.ql-clinic .el-tabs__item.is-active {
    color: #fff;
}
.ql-clinic .basic{
	width: 100%;
	height: 600px;
	background: #fff

}
.ql-clinic .clinic-img{
	background: #fff;
	height:250px;
	padding:50px 5px 0px; 
}
.ql-clinic .clinic-img .user-img img{
	height: 100px;
    margin-bottom: 40px;
}
/*.el-button {
    background: #fff;
    border: 1px solid #dedede;
    color: #50bfff;
}
.el-button {
	background: none;
    border: 0px;
}*/
.ql-clinic .ql-button {
    color: #50bfff;
	background: none;
    border: 0px;
    padding: 10px 100px;
}
.ql-clinic .ql-intro{
	overflow: hidden;
	margin-bottom: 30px
}
.ql-clinic .ql-intro p{
	float: left;
	margin: 9px;
}

.ql-clinic .intro-header p span{
	margin: 5px;
}
.ql-clinic .intro-header p .bianma{
	background-color: #82B9EC;
	color:#fff;
	padding: 5px 15px;
	font-size: 10px;
	border-radius: 5px;
}

.ql-clinic .el-pagination__total {
    float: left;
}
.ql-clinic .el-pagination .btn-next {
    margin-right: 10px;
}
.ql-clinic .el-pagination .btn-next, .el-pagination .btn-prev {
    border: 0px solid #d1dbe5;
}
.ql-clinic .el-pager li {
    
    border: 0px;
}
.ql-clinic .el-pager li.active {
	border-radius: 50px;
    border-color: #21D081;
    background-color: #21D081;
    color: #fff;
    cursor: default;
}
.ql-clinic .el-pager li:last-child {
     border-right: 0px; 
}

/* .el-select-dropdown__item.selected {
    color: #fff;
    background-color: #21D081;
}
 .el-select-dropdown__item.selected :click {
    color: #fff;
    background-color: #21D081;
}
*/
/*ofiice*/
.ql-clinic .el-table th>.cell {
    font-size: 18px;
    font-weight: initial;
}
.ql-clinic .ql-left{
	margin-left: 20px;
}

.ql-clinic .icon-add{
	background-image:url(../assets/image/30.png);
	width: 26px;
	height: 23px;
	border-radius: 13px;
}
.ql-clinic .icon-add2{
	background-image:url(../assets/image/55.png);
	width: 20px;
	height: 20px;
	border-radius: 10px;
}
.ql-clinic .icon-del2{
	background-image:url(../assets/image/55.png);
	width: 20px;
	height: 20px;
	border-radius: 10px;
}
.ql-clinic .icon-check{
	background-image:url(../assets/image/62.png);
	width: 20px;
	height: 20px;
	border-radius: 10px;
}
.ql-clinic .icon {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    vertical-align: middle;
    position: relative;
    top: -2px;
    margin-right: 5px;
    display: inline-block;
    background-position: 0 0;
}
.ql-clinic .el-submenu__icon-arrow {
    right: 910px;
    margin-top: -4px;

}
.ql-clinic .el-submenu .el-menu-item {
    padding: 0 17px;
}
</style>