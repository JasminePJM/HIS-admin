<template>
<div id='login'>
   <div class="login">
     <el-form class="login-content"  @keyup.13.native="msgalert">
       <img class="login-img" src="../assets/img/98.png" />
       <span class="login-span">
         <img class="login-img2" src="../assets/img/99.png" />
         <el-input type="text" v-model="formInofo.orgCode" class="login-input" placeholder="请输入机构编码" ></el-input>
       </span>
       <span class="login-span">
         <img class="login-img2" src="../assets/img/101.png" />
         <el-input type="text" v-model="formInofo.userName" class="login-input" placeholder="请输入用户名"></el-input>
       </span>
       <span class="login-span">
         <img class="login-img2" src="../assets/img/103.png"/>
         <el-input type="password" v-model="formInofo.psd"  class="login-input" placeholder="请输入密码"></el-input>
       </span>
       <el-button class="login-btn" @click="msgalert()">登录</el-button>
       <div class="regDiv"><router-link to="/register">还没账号？点我去注册</router-link></div>
     </el-form>
     <p class="login-p">Copyright © 2017-2017 两个个登录账号信息：(1,1,1)、(0,zero,0)</p>
   </div>
</div>
  
</template>

<script>
import { api } from '@/global/api.js'//引入静态资源
export default {
  name: 'login',
  data: function() {
    return {
      formInofo: {
        "orgCode": "",
        "userName": "",
        "psd": ""
      }
    }
  },
  methods: {
    msgalert () {
      if (this.formInofo.orgCode === "") {
        this.$message('机构编码不得为空');
      }else if(this.formInofo.userName === ""){
        this.$message('用户名不得为空');
      }else if(this.formInofo.psd === ""){
        this.$message('密码不得为空');
      }else if(this.formInofo.orgCode !== "" && this.formInofo.userName !== "" && this.formInofo.psd !== ""){
        let current = this.formInofo;
        let mark = 0;
        this.$http.get(api.login).then(function(res){
          for(let i = 0; i <= res.data.data.length-1; i++){
            if(current.orgCode === res.data.data[i].orgCode && current.userName === res.data.data[i].userName && current.psd === res.data.data[i].psd&&mark==0){
                mark=1;
                window.sessionStorage.setItem("Info",JSON.stringify(this.formInofo));
            }
          }
          if(mark == 1){
            this.$router.push({path: '/'});
          }else{
            this.$message('机构编码、用户名或者密码不正确');
            this.formInofo.orgCode = "";
            this.formInofo.userName = "";
            this.formInofo.psd = "";
          }
        },function(res){
          this.$message('The Request is Failed.');
        })
      }
    }
  }
}
</script>

<style>
      #login body {
        margin: 0px;
      }
      
      #login .login {
        margin: 0px;
        padding: 0px;
        background: url("../assets/img/login01.jpg") 0% 0% / cover no-repeat;
        display: block;
        position: fixed;
        width: 100%;
        height: auto;
      }
      
      #login .login-content {
        height: 386px;
        width: 495px;
        background: white;
        display: block;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
        left: 0;
        right: 0;
      }
      
      #login .login-tip {
        background: white;
        width: 200px;
        height: 65px;
        line-height: 65px;
        margin-left: 45%;
      }
      
      #login .login-img {
        text-align: center;
        margin-top: 45px;
        margin-bottom: 15px;
      }
      
      #login .login-span {
        display: block;
        width: 350px;
        height: 47px;
        margin: 0px 70px 0px 80px;
        font-size: 28px;
        margin-bottom: 15px;
      }
      
      #login .login-img2 {
        display: inline-block;
        line-height: 36px;
        margin-right: 15px;
      }
      
      #login .login-input {
        width: 300px;
        height: 45px;
        border: none;
        display: inline-block;
        margin-top: -15px;
        line-height: 45px;
        position: relative;
      }
      
      #login .login-input:focus {
        border: 1px #999 solid;
      }
      
      #login .login-btn {
        background: #21D081;
        color: #ffffff;
        width: 354px;
        height: 47px;
        margin-top: 15px;
        border-radius: 5px;
        margin: 0px 70px 0px 80px;
      }
      
      #login .login-btn:hover {
        color: #4CD786;
        border: 0px;
      }
      
      #login .login .login-p {
        text-align: center;
        margin-top: -105px;
        color: #999;
        font-size: 12px;
      }
      #login .login .regDiv{
        text-align: center;
        margin-top:30px;
      }
      #login .login .regDiv a{
        color:#18A0F4;
        font-size:14px;
      }

</style>