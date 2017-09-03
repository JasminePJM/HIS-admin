<template>
	<div>
		<div class="projectApp">
			<div class="projectContainer">
				<el-menu :default-active="activeIndex" class="el-menu-demo nav-menu" mode="horizontal">
					<router-link to="/project/item"  @click="markactiveIndex='1'" style="float:left;">
						<el-menu-item index="1"><span>项目</span></el-menu-item>
					</router-link>
					<router-link to="/project/meal"  @click="markactiveIndex='2'" style="float:left;">
						<el-menu-item index="2"><span>套餐</span></el-menu-item>
					</router-link>
					<router-link to="/project/regFee"  @click="markactiveIndex='3'" style="float:left;">
						<el-menu-item index="3"><span>挂号费</span></el-menu-item>
					</router-link>
				</el-menu>
				<router-view>

   			    </router-view>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
	    	return {
	    		activeIndex:'1',
	        	
	      	};
    	},
	}
	</script>

<style type="text/css">
	.projectApp{
		padding-left: 20px;
		padding-right: 20px;
		min-height: 300px;
	}
	.projectApp .el-breadcrumb__item:last-child .el-breadcrumb__separator {
    	display: none;
    }
    /*mark: 一旦加了外盒的class为前缀就失效*/
	.el-scrollbar .el-scrollbar  .el-select-dropdown__item.selected.hover,.el-scrollbar .el-select-dropdown__item.selected{
		background-color:  #21d081 !important;
	}
	.el-scrollbar__view{
		padding-bottom:0px;
		padding-top: 0px;
	}
	.projectContainer .nav-menu{
		background-color: white;
		border-radius: 5px;
		box-shadow:  0px -1px 0px 0px #FFFFFF,   
		            -1px 0px 0px 0px #FFFFFF,  
		            1px 0px 0px 0px #FFFFFF,  
                    0px 3px 1px #C8C8C8;    /*下边阴影*/
	}
	.projectApp .el-breadcrumb{
		line-height: 60px;
		height: 60px;
	}
    .projectContainer .nav-menu a{
    	text-decoration: none;
    	display: inline-block;
    	height: 100%;
    	
    }
    .projectContainer .nav-menu span{
		color: #C3C3C3;
    }
    .projectContainer .nav-menu .is-active{
    	background-color: #21d081;
    }
     .projectContainer .nav-menu .is-active span{
    	color: white !important;
    }
   
    .projectContainer .nav-menu .el-menu-item,.nav-menu .is-active{
    	border-bottom:0px !important;
    	padding: 0px 30px;
    }
     .projectContainer .nav-menu a:first-child  li:first-child {
		border-radius: 5px 0px 0px 5px;
    } 
    .projectApp .el-menu--horizontal .el-menu-item{
    	line-height: 50px;
    	height: 50px;
    }
     .projectApp .el-menu--horizontal .el-menu-item{
     	float: left;
     }
     .projectApp .page-nav{
		text-align: center;
	}
</style>
