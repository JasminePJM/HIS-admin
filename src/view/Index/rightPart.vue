<template>    
  <div class="rightSide">
    <div class="nav-top">
       <el-menu class="el-menu-demo nav-top" mode="horizontal">
           <span class='btn-collapse'>
            <i class="fa fa-hospital-o" style="font-size:20px;"></i>&nbsp;{{orgName}}
           </span>
           <span id="Showtime" >今天{{getMonth}}月{{getDay}}日&nbsp&nbsp{{getWeekDay}}&nbsp{{getHours}}:{{getMinutes}}</span> 
           <el-menu-item index="1"  @click=logout()><a href="#">
             <span class='icon-img icon-exit'></span>退出</a>
           </el-menu-item>
           <el-menu-item index="3"><a href="#" >
             <span class='icon-img icon-help'></span>帮助</a>
           </el-menu-item>
           <el-menu-item index="4"><a href="#" >
            <span class='icon-img icon-message'></span>消息</a>
           </el-menu-item>
           <el-submenu index="2">
             <template slot="title">
             欢迎
             <img class="img-account" v-bind:src="personImg" >
             <span>{{username}}</span>
             </template>
             <el-menu-item index="2-1"><router-link to='/personalInfo' > 个人信息</router-link></el-menu-item>
             <el-menu-item index="2-2">修改密码</el-menu-item>
           </el-submenu>
         </el-menu>
    </div>
    <div class="intro">
       <el-breadcrumb separator="/">
          <el-breadcrumb-item style="position: relative;top:-18px;">
            <a @click="backPage()" class="backAlink"><img src="../../assets/img/Project/20.png">&nbsp;&nbsp;</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
       </el-breadcrumb>
    </div>
    <div class="main-content">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import { api } from '@/global/api.js'//引入静态资源
  var myDate=new Date();
  var date=myDate.getDay(); //星期几
  var weekDay=new Array('周一','周二','周三','周四','周五','周六','周日');
  export default {
    name:'rightPart',
    data() {
      return {
         personImg: require('../../assets/image/113@2x.png'),
         username:"",
         orgName:"",
         getMinutes:"",
         getMonth:"",
         getDay:"",
         getHours:"",
         getWeekDay:"",
      }  
    },
    computed:{
    },
    methods:{
      updateTime(){
        var that=this;
        setInterval(function(){
          myDate=new Date();
          that.getMonth=myDate.getMonth()+1;
          that.getDay=myDate.getDate();
          that.getHours=myDate.getHours();
          that.getMinutes=myDate.getMinutes();
          if(that.getHours<10)
            that.getHours="0"+that.getHours;
          if(that.getMinutes<10)
            that.getMinutes="0"+that.getMinutes;
          that.getWeekDay=weekDay[date-1];
        },1000)
      },
      requireImg(){
        let current = JSON.parse(window.sessionStorage.getItem("Info"));
        this.username=current.userName;
        let mark = 0;
        let that=this;
        this.$http.get(api.login).then(function(response){
            for(let i = 0; i <= response.data.data.length-1; i++){
              if(current.orgCode === response.data.data[i].orgCode && current.userName === response.data.data[i].userName && current.psd === response.data.data[i].psd && mark==0){
                  mark=1;
                  that.orgName=response.data.data[i].orgName;
                  that.personImg=response.data.data[i].img;
              }
          }
        })
      },
      logout(){
        window.sessionStorage.removeItem("Info");
        window.sessionStorage.clear();
        this.$router.push({path: '/login'});
      },
      backPage(){
        this.$router.go(-1);
      },
    },
    mounted: function(){
        this.updateTime();
        this.requireImg();
    },
  }
</script>