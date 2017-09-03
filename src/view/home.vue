<template>
	<div id='jm-home'>
	    <div>
	    	<el-row :gutter="30" style="margin-right:0px;">
	    	  <el-col :xs="23" :sm="23" :md="15" :lg="15">
	    	  	 <div class="today-booking">
		    		<div class='booking-title'>
		    		   <span style="font-weight:bold;">今日预约</span>
		    		   <a class="more">更多</a>
		    		</div>
		    		<table class="table">
		    			<tr v-for='book in filteredBook'>
		    			   <td>{{book.time}}</td>
		    			   <td>{{book.peple}}</td>
		    			   <td>{{book.phone}}</td>
		    			   <td>预约：{{book.doctor}}</td>
		    			   <td><a href='#'>查看</a></td>
		    			</tr>
		    		</table>
		    	</div>

	    	 </el-col>
	    	  <el-col :xs="23" :sm="23" :md="9" :lg="9">
	    	  	 <div class="today-scheduling gap">
		    		<div class='booking-title'>
		    		   <span style="font-weight:bold;">今日排班</span>
		    		   <a class="more">更多</a>
		    		</div>
		    		<table class="table">
		    			<tr v-for="scheduling in filteredScheduling">
		    			   <td>{{scheduling.time}}</td>
		    			   <td>{{scheduling.doctor}}</td>
		    			</tr>
		    		</table>
		    	</div>
	    	  </el-col>
	    	  
	    	</el-row>
	    	<el-row :gutter="30" style="margin-right:0px;">
	    	  <el-col :xs="23" :sm="23" :md="15" :lg="15">
	    	  	 <div class="today-booking gap-y" id='count'>
	    	  	 	<div class='booking-title'>
	    	  	 	   <span style="font-weight:bold;">月度统计(过去三十天)</span>
	    	  	 	   <a class="more">更多</a>
	    	  	 	</div>
	    	  	 	<div id='echarts'></div>
	    	  	 	<div id='echarts2'></div>

	    	  	 	
	    	  	 </div>

	    	  </el-col>
	    	  <el-col :xs="23" :sm="23" :md="9" :lg="9">
	    	  	 <div class="today-scheduling gap gap-y">
	    	  	 	<div class='booking-title'>
	    	  	 	   <span style="font-weight:bold;">最新动态</span>
	    	  	 	   <a class="more">更多</a>
	    	  	 	</div>
	    	  	 	<table class="table">
	    	  	 		<tr v-for='news in filteredNews'>
		    			   <td>{{news.time}}</td>
		    			   <td>{{news.event}}</td>
		    			</tr>

	    	  	 	</table>
	    	  	 </div> 
	    	  </el-col>	    	  
	    	</el-row>
	    </div>	
	</div>
</template>
<script>
import { api } from '@/global/api.js'//引入静态资源
import echart from '../../static/echarts.common.min.js'
import  VueResource  from 'vue-resource'

Vue.use(VueResource)
import Vue from 'vue'

	export default{
		data: function(){
			return {
				todayBook:[
                   {
                   "time":null,
                   "people":null,
                   	"phone":null,
                   	"doctor":null
                   }
				],
				todayScheduling:[
                   {
                   	"time":null,
                   	"doctor":null
                   }
				],
				recentNews:[
                   {
                     "time":null,
                     "event":null
                   }
				]	
			}
		},
		methods: {
				getData:function(){
		           let data=this;
		           Vue.http.get(api.home).then(function(respone){
		               console.log(respone.data);
		               data.todayBook=respone.data.todayBook;
		               data.todayScheduling=respone.data.todayScheduling;
		               data.recentNews=respone.data.recentNews;
		           })
                }
		},
		computed:{
			filteredScheduling:function(){
				return this.todayScheduling.slice(0,5);
			},
			filteredBook:function(){
				return this.todayBook.slice(0,5);
			},
			filteredNews:function(){
				return this.recentNews.slice(0,5);
			}
		},
		mounted(){
			var myChart=echart.init(document.getElementById('echarts'));
			var myChart1=echart.init(document.getElementById('echarts2'));
			// Vue.http.get('../static/Routerjson/home.json').then(function(respone){
			// 		this.todayBook=respone.data.todayBook;
			// 		this.todayScheduling=respone.data.todayScheduling;
			// 		this.recentNews=respone.data.recentNews;
			// 		console.log(this.todayBook);

			// 	})
            this.getData();
			myChart.setOption({
				title: { text: '门诊人次' },
                tooltip: {},
                xAxis: {
                    data: ["所有人次","我的人次"]
                },
                yAxis: {},
                series: [{
                    name:'Acutal',
		            type:'bar',
		            stack: 'sum',
		            barCategoryGap: '50%',
		            itemStyle: {
		                normal: {
		                    color: 'tomato',
		                    barBorderColor: 'tomato',
		                    barBorderWidth: 4,
		                    barBorderRadius:0,
		                    label : {
		                        show: true, position: 'insideTop'
		                    }
		                }
		            },
                    data: [165,23],

                }]
          
			})
			myChart1.setOption({
				title: { text: '收费总额' },
                tooltip: {},
                xAxis: {
                    data: ["所有收费","我的收费"]
                },
                yAxis: {},
                series: [{
                    name:'Acutal',
		            type:'bar',
		            stack: 'sum',
		            barCategoryGap: '50%',
		            itemStyle: {
		                normal: {
		                    color: '#104b7d',
		                    barBorderColor: '#104b7d',
		                    barBorderWidth: 4,
		                    barBorderRadius:0,
		                    label : {
		                        show: true, position: 'insideTop'
		                    }
		                }
		            },
                    data: [10000,4000],

                }]
          
			})
		}
	}
</script>
<style>
#jm-home #count{
	height: auto !important;
}
#jm-home #echarts,#echarts2{
	padding: 8px 16px;
	height: 350px;
	width: 260px;
	float:left;
	margin-right: 35px;
}
#jm-home #echarts canvas,#echart2 canvas{
	height: 350px !important;
	width: 300px !important;
}

#jm-home .gap-y{
	margin-top: 20px;
}
 #jm-home .today-booking{
 	width: 100%;
 	height: 400px;
 	background-color: #fff;
 	box-shadow: 2px 1px 1px 1px #eaeaea;
 	float: left;
 }
#jm-home .today-scheduling{
 	width: 100%;
 	height: 400px;
 	background-color: #fff;
 	box-shadow: 2px 1px 1px 1px #eaeaea;
 	float: left;
 }
 #jm-home .booking-title{
 	font-size: 16px;
 	padding: 8px 16px;
 	letter-spacing: 1px;
 	border-bottom: 1px solid #F1F1F1;
 	background-color: #FBFBFB;
 }
 #jm-home .more{
    color: #77d0a4;
    text-decoration: none;
    float: right;
    font-size: 14px;
 }
#jm-home table{
 	padding:18px 16px;
 }
 #jm-home table tr{
 	height: 40px;
 }
 #jm-home .table td{
   width: 280px;
   /*border:1px solid #000;*/
 }
#jm-home table a{
   color: #77d0a4;
   text-decoration: none;
 }
	
</style>