<template>
  <div class="appContainer">
    <div  class="sideBar">
      <leftNav></leftNav>
    </div>
    <div  class="rightContent">
      <div class="contentInner">
        <rightPart></rightPart>
      </div>
    </div>
  </div>
</template>
<script>
  import leftNav from './leftNav' 
  import rightPart from './rightPart' 
  export default {
     components: {
      leftNav,
      rightPart, 
    },
    data() {
      return {
        navCollapse:'1'
      }
    },
    methods: {
     
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.appContainer {
  margin:0;
 /*  overflow:hidden; */
  height: auto;
  min-height: 100px;
  position:relative;
}
.sideBar{
  height:100%;
  width:195px;
  position:absolute;
  top:0px;
  left:0px;
  z-index:99;
}
.rightContent{
  height:auto;
  float:right;
  width:100%;
  position:absolute;
  top:0px;
  left:0px;
}
.contentInner{
  margin-left:195px;
  height: auto;
}

.appContainer .img-account{
  height: 40px;
  width: 40px;
  position: static;
  vertical-align: middle;
  margin-right: 8px;
  color: #97a8be;
  margin-top: -3px;
}
.appContainer .el-breadcrumb{
  font-size: 15px;
}
.appContainer .el-submenu.is-active .el-submenu__title {
    border-bottom-color: #fff;

}
.appContainer .el-menu--horizontal .el-submenu .el-submenu__title {
    line-height: 52px;
    height: 50px;

}
.appContainer .el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
  display: none;
}
.appContainer a{
  text-decoration: none;
  color: #000;
}
.appContainer .nav-left{
/*  width: 20%;*/
  height: 100%;
  padding: 0;
  position: fixed;
  background-color: #324D56;
  border-right: 1px solid #000;
}
.appContainer .showNav{
  width: 60px !important;
}
.appContainer .main-nav{
  width: 100%;
  height: auto;
}
.appContainer .logo{
  width: 194px;
  height: 100px;
  background-color: #fff;
}
.appContainer .logo img{
  /*border: 1px solid;*/
  padding: 32px;
  width: 130px;
}
.appContainer .rightSide{
  width: 100%;
  height: auto;
  /*border: #000 1px solid;*/
  float: left;
  background-color: #F1F1F1;
  padding-bottom: 15px;
}
.appContainer .nav-top{
  width: 100%;
  min-height: 50px;
  height: auto;
  border-bottom: #bbb 1px solid;
}
.appContainer .el-menu{
  background-color: #fff;
}
.appContainer .el-menu--horizontal .el-menu-item{
  float: right;
}
.appContainer .el-menu--horizontal .el-submenu{
  float: right;
}

.appContainer .main-nav .el-menu{
  background-color:#324D56;

}
.appContainer .el-menu-item{
  height: 50px;
  font-size: 15px !important; 
  line-height: 50px;
}
/*顶部导航图标*/
.appContainer a.router-link-active .icon-active{
  border-left: 2.5px solid #57d78c;
  background-color: #263a41 !important;
  color: #fff !important;
  box-sizing: border-box;
}
.appContainer .icon-img{
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
  position: relative;
  top: -2px;
  margin-right: 5px;
  display: inline-block;
  background-position: 0 0;
}
.appContainer .icon-exit{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(../../assets/image/16.png);
}
.appContainer .icon-help{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(../../assets/image/14.png);
}
.appContainer .icon-message{
  margin-right: 20px;
  width: 25px;
  height: 25px;
  background-image: url(../../assets/image/15.png);
}
.appContainer .icon-home{
  margin-right:20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/01.png);
}
.appContainer .icon-search{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/02.png);
}
.appContainer .icon-scheduling{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/03.png);
}
.appContainer .icon-booking{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/04.png);
}
.appContainer .icon-inquiry{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/05.png);
}
.appContainer .icon-recipe{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/06.png);
}
.appContainer .icon-charge{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/07.png);
}
.appContainer .icon-clinic{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/09.png);
}
.appContainer .icon-drug{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/10.png);
}
.appContainer .icon-model{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/11.png);
}
.appContainer .icon-power{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/12.png);
}
.appContainer .icon-patient{
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/image/08.png);
}
.appContainer .btn-collapse{
  min-width: 50px;
  width: auto;
  height: 50px;
  border-right: 1px solid #bbb;
  display: inline-block;
  float: left;
  padding: 12px 12px;
  box-sizing: border-box;
  background-color: #F1F1F1;
}
.appContainer .btn-collapse img{
  width: 25px;
  height: 25px;
}
.appContainer #Showtime{
  font-size: 15px;
  width: 200px;
  height: 50px;
  /*border: 1px solid #bbb;*/
  display: inline-block;
  float: left;
  padding: 16px 15px;
  box-sizing: border-box;
}
.appContainer .intro{
  font-size: 14px;
  padding:15px 15px;
  color: #bbb;
}
.appContainer .main-content{
  margin:0 15px;
  width: 97%;
  /*border:1px solid #333;*/
}
.appContainer table{
  padding:0;
}
.appContainer .el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
  border-bottom: 5px solid #21d081;
}
.backAlink>img{
      position: relative;
      top:11px;
    }
</style>

