<template>
	<div class="ql-count">
		<el-tabs type="border-card">
			<el-tab-pane label="财务报表">
				<div class="caiwu">
					<el-tabs>
						<el-tab-pane label="营收报表" autofocus>
							<div class="yingshou">
								<el-tabs type="border-card">
									<el-tab-pane>
										<span slot="label"><i class="el-icon-date"></i> 图表</span>
										<div class="yingshou-tubiao">
											
											<div id="ys-tb"  :style="{
											width:'1000px',
											height:'400px',
											margin:'0 85px',
											border:'1px soild #dedede'
											 }"></div>
                                            <el-row>
                                            <el-col :lg='16'>
											<div id="ys-tb2"  :style="{width:'800px',height:'400px', margin:'0 10px',border:'1px soild #dedede'}">
												
											</div>
											</el-col>
											<el-col :lg='8'>
                                               <div id="ys-tb3" :style="{width:'250px',height:'400px', margin:'0',border:'1px soild #dedede' }">
                                               <p>选择门店对比</p>
                                               	<el-checkbox-group v-model="checkList">
                                               	    <el-checkbox label="海珠店"></el-checkbox>
                                               	    <el-checkbox label="天河店"></el-checkbox>
                                               	    <el-checkbox label="白云店"></el-checkbox>
                                               	    <el-checkbox label="番禺店"></el-checkbox>
                                               	  </el-checkbox-group>
                                               </div>
											</el-col>
                                            </el-row>
											<!-- <div id="ys-tb3" :style="{width:'150px',height:'400px', margin:'0',color:'red' }"></div> -->
										</div>

									</el-tab-pane>

									<el-tab-pane>
										<span slot="label"><i class="el-icon-date"></i> 汇总表</span>
										<div class="yingshou-huizong" >
											<el-table   :data="ysHZ"   border fit highlight-current-row  >

												<el-table-column label="日期" align="center">
													<template scope="scope">
													  {{scope.row.date}}
													</template>
												</el-table-column>

												<el-table-column label="收费类别（元）" align="center">

													<el-table-column label="诊金"align="center">
														<template scope="scope">
														  {{scope.row.zhenjin}}
														</template>
													</el-table-column>

													<el-table-column label="西药"align="center">
														<template scope="scope">
														  {{scope.row.xiyao}}
														</template>
													</el-table-column>

													<el-table-column label="检查项目"align="center">
														<template scope="scope">
														  {{scope.row.jiancha}}
														</template>
													</el-table-column>

													<el-table-column label="化验项目">
														<template scope="scope">
														  {{scope.row.huayan}}
														</template>
													</el-table-column>

													<el-table-column label="超声检查">
														<template scope="scope">
														  {{scope.row.chaosheng}}
														</template>
													</el-table-column>

													<el-table-column label="治疗项目">
														<template scope="scope">
														  {{scope.row.zhiliao}}
														</template>
													</el-table-column>

													<el-table-column label="协调收入">
														<template scope="scope">
														  {{scope.row.xietiao}}
														</template>
													</el-table-column>

													<el-table-column label="套餐">
														<template scope="scope">
														  {{scope.row.taocan}}
														</template>
													</el-table-column>

													<el-table-column label="总计">
														<template scope="scope">
														  {{scope.row.sum}}
														</template>
													</el-table-column>

												</el-table-column>

												<el-table-column label="折扣金额">
													<template scope="scope">
													  {{scope.row.zhekou}}
													</template>
												</el-table-column>

												<el-table-column label="应收金额">
													<template scope="scope">
													  {{scope.row.yingshou}}
													</template>
												</el-table-column>

												<el-table-column label="实收金额">
													<template scope="scope">
													  {{scope.row.shishou}}
													</template>
												</el-table-column>

												<el-table-column align="center"  label="操作" >
												    <template scope="scope">
												      <el-button @click="" type="text" size="small" icon="document">查看详情</el-button>
												    </template>
												</el-table-column>
											</el-table>
										</div>
									</el-tab-pane>

									<el-tab-pane>
										<span slot="label"><i class="el-icon-date"></i> 明细表</span>
										<div class="yingshou-mingxi" >
											<el-table   :data="ysMX"   border fit highlight-current-row  >

												<el-table-column label="日期" align="center">
													<template scope="scope">
													  {{scope.row.date}}
													</template>
												</el-table-column>

												<el-table-column label="客户姓名" align="center">
													<template scope="scope">
													  {{scope.row.kuhuName}}
													</template>
												</el-table-column>

												<el-table-column label="收费类别（元）" align="center">

													<el-table-column label="诊金"align="center">
														<template scope="scope">
														  {{scope.row.zhenjin}}
														</template>
													</el-table-column>

													<el-table-column label="西药"align="center">
														<template scope="scope">
														  {{scope.row.xiyao}}
														</template>
													</el-table-column>

													<el-table-column label="检查项目"align="center">
														<template scope="scope">
														  {{scope.row.jiancha}}
														</template>
													</el-table-column>

													<el-table-column label="化验项目">
														<template scope="scope">
														  {{scope.row.huayan}}
														</template>
													</el-table-column>

													<el-table-column label="超声检查">
														<template scope="scope">
														  {{scope.row.chaosheng}}
														</template>
													</el-table-column>

													<el-table-column label="治疗项目">
														<template scope="scope">
														  {{scope.row.zhiliao}}
														</template>
													</el-table-column>

													<el-table-column label="协调收入">
														<template scope="scope">
														  {{scope.row.xietiao}}
														</template>
													</el-table-column>

													<el-table-column label="套餐">
														<template scope="scope">
														  {{scope.row.taocan}}
														</template>
													</el-table-column>

													<el-table-column label="总计">
														<template scope="scope">
														  {{scope.row.sum}}
														</template>
													</el-table-column>

												</el-table-column>

												<el-table-column label="折扣金额">
													<template scope="scope">
													  {{scope.row.zhekou}}
													</template>
												</el-table-column>

												<el-table-column label="应收金额">
													<template scope="scope">
													  {{scope.row.yingshou}}
													</template>
												</el-table-column>

												<el-table-column label="实收金额">
													<template scope="scope">
													  {{scope.row.shishou}}
													</template>
												</el-table-column>

												<el-table-column align="center"  label="收费员" >
												    <template scope="scope">
													  {{scope.row.shoufeiyuan}}
													</template>
												</el-table-column>
											</el-table>
										</div>
									</el-tab-pane>
								</el-tabs>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</el-tab-pane>
			<el-tab-pane label="医疗报表">
				<div class="yiliao">
					<el-tabs>
						<el-tab-pane label="病人来源" autofocus>
							<router-link to='/yiliao-bingren-tubiao' >
								<el-button :plain="true" type="success" autofocus>图表</el-button>
							</router-link>
							<router-link to='/yiliao-bingren-huizong' >
								<el-button :plain="true" type="success">汇总表</el-button>
							</router-link>
							<router-link to='/yiliao-bingren-mingxi' >
								<el-button :plain="true" type="success">明细表</el-button>
							</router-link>
							<div>
								<router-view></router-view>
							</div>
						</el-tab-pane>

						<!-- <el-tab-pane label="医生出诊">
							
						</el-tab-pane> -->
					</el-tabs>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import { api } from '@/global/api.js'//引入静态资源
import 	Vue from 'vue'
import echart from "../../static/echarts.common.min.js"
 export default{
        data (){
            return {
                msg:"123",
                checkList: ['海珠店','天河店'],
                ysHZ:null,
                ysMX:null
            }
        },
        methods:{
        	//获取动态数据（json也有可能接口）
		    getData:function(){
		      	let me = this;

		      	Vue.http.get(api.clinicData).then(function(response){
		      		me.ysHZ = response.data.data.countHz1;
		      		me.ysMX = response.data.data.countMx1;

		      	}, function(response){
		      		alert("JSON文件请求失败了")
		      	})
		    }
		},
        mounted (){
        	// JSON
        	var vm = this;
        	vm.getData();


        	var theme = {
        	    color: [
        	        '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
        	        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
        	        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
        	    ],
        	};
            var myChart = echart.init(document.getElementById('ys-tb'),theme );
            myChart.setOption({
                title: { text: '收入汇总表',x:'center' },
                // tooltip: {
                // 	trigger:'axis'
                // },
                calculable : true,
                xAxis: {
                	type : 'category',
                	boundaryGap : false,
                    data: ["06","07","08","09","10","11","12","01","02","03","04","05"]
                },
                yAxis: {
                	type : 'value',
                	axisLabel : {
                	                formatter: '{value} '
                	            }
                },
                series: [{
                    type:'line',
                    itemStyle : {  
                    	normal : {
                    		color:'#1FCA7E',
                            lineStyle:{  
                                color:'#1FCA7E', 
                                
                            }  
                        }  
                    },  
                    data: [48000,50000,53000,52000,49500, 65000, 69000, 67000,64000,72000,81000, 82000]
                }]
            });

			var myChart2 = echart.init(document.getElementById('ys-tb2'),theme );
			myChart2.setOption({
			    title: { text: '门店对比-收入汇总表',x:'center' },
			    tooltip: {
			    	trigger:'axis'
			    },
			    legend:{
			    	data:['海珠店','天河店']
			    },
			    calculable : true,
			    xAxis: {
			    	type : 'category',
			    	boundaryGap : false,
			        data: ["06","07","08","09","10","11","12","01","02","03","04","05"]
			    },
			    yAxis: {
			    	type : 'value',
			    	axisLabel : {
			    	                formatter: '{value} '
			    	            },
			    	// data: ["10,000","20,000","30,000","40,000","50,000","60,000","70,000","80,000","90,000"]
			    },
			    series: [
			    {
			        type:'line',
			        itemStyle : {  
			        	normal : {
			        		color:'#F99A0C',
			                lineStyle:{  
			                    color:'#F99A0C', 
			                    
			                }  
			            }  
			        },  
			        data: [48000,50000,53000,52000,49500, 65000, 69000, 67000,64000,72000,81000, 82000]
			    },
			    {
			    	type:'line',
			        itemStyle : {  
			        	normal : {
			        		color:'#29A5D9',
			                lineStyle:{  
			                    color:'#29A5D9', 
			                }  
			            }  
			        },  
			        data: [69000,61000,57000,64000,71500, 75000, 77000, 75000,70000,69000,65000, 62000]
			    }]
			});
        }

    }
</script>

<style>
.ql-count .el-tabs--border-card {
    border-radius: 5px;
}
.ql-count .el-tabs__header {
    box-shadow: 0px 2px 1px #dedede;
    border-radius: 5px;
}
.ql-count .el-tabs__nav-scroll {
    border-radius: 5px;
    background: #fff;
}
.ql-count .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #21D081;
}
.ql-count .el-tabs__item.is-active {
    color: #fff;
}
.ql-count .caiwu .el-tabs__item.is-active, .ql-count .yiliao .el-tabs__item.is-active {
    color: #000;
} {
    color: #000;
}
.ql-count .yingshou .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #fff;
        padding: 0 10px;
    border: 2px solid;
    border-radius: 5px;
}

.ql-count .el-tabs__active-bar {
    background-color: #21D081;
}
.ql-count .el-tabs--border-card>.el-tabs__content {
     padding: 10px 0; 
}
.ql-count .yingshou .el-tabs--border-card>.el-tabs__content {
     border: none;
}
.ql-count .yingshou .el-tabs__item.is-active {
    color: #34c562;
}
.ql-count .yingshou .el-tabs__header {
    box-shadow: none;
}
.yingshou .el-tabs--border-card {
	border:none;
}
.ql-count  .el-checkbox+.el-checkbox {
    width: 100%;
    margin-left: 0;
}
</style>