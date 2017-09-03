<template>
	 <div class="nav-left">
     <div class="logo">
       <img src="../../assets/image/newLogo1.png">
     </div>
     <div class="main-nav" >
       <el-menu  class="el-menu-vertical-demo"  theme="dark" style="margin-top:30px;">
        <router-link to='/home'>
            <el-menu-item index="1" class='icon-active'><span class='icon-img icon-home'></span>首页</el-menu-item>
        </router-link>
        <router-link to='/patient'>
            <el-menu-item index="9" class='icon-active'><span class='icon-img icon-patient'></span>患者</el-menu-item>
        </router-link>
        <router-link to='/booking'>
            <el-menu-item index="5" class='icon-active'><span class='icon-img icon-booking'></span>预约</el-menu-item>
        </router-link>
        <router-link to='/recipe'>
            <el-menu-item index="7" class='icon-active'><span class='icon-img icon-recipe'></span>处方</el-menu-item>
        </router-link>
        <router-link to='/project'>
            <el-menu-item index="12" class='icon-active'><span class='icon-img icon-charge'></span>项目</el-menu-item>
        </router-link>
        <router-link to='/count'>
            <el-menu-item index="10" class='icon-active'><span class='icon-img icon-clinic'></span>统计</el-menu-item>
        </router-link>
        <router-link to='/clinic'>
            <el-menu-item index="10" class='icon-active'><span class="fa fa-hospital-o" style="font-size:20px;"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;诊所</el-menu-item>
        </router-link>
      </el-menu>
     </div> 
    </div>
</template>
<script>
    export default {
    	name:'leftNav',
    }
</script>