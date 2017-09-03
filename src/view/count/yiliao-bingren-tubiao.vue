<template>
	<div class="ylbr-tb">
		<div id="br-tb"  :style="{
		width:'1000px',
		height:'400px',
		margin:'0 85px',
		border:'1px soild #dedede'
		 }"></div>
	</div>
</template>

<script>
import echart from "../../../static/echarts.common.min.js"
export default{
	mounted (){
		var myChart = echart.init(document.getElementById('br-tb') );
		myChart.setOption({
		   tooltip : {
		           trigger: 'item',
		           formatter: "{a} <br/>{b} : {c} ({d}%)"
		       },
		       legend: {
		           orient: 'vertical',
		           left: 'right',
		           data: ['医生','护士','患者','其他']
		       },
		       series : [
		           {
		               name: '病人来源',
		               type: 'pie',
		               radius : '55%',
		               center: ['50%', '60%'],
		               data:[
		                   {value:43, name:'医生'},
		                   {value:29, name:'护士'},
		                   {value:14, name:'患者'},
		                   {value:14, name:'其他'}
		               ],
		               itemStyle: {
		                   emphasis: {
		                       shadowBlur: 10,
		                       shadowOffsetX: 0,
		                       shadowColor: 'rgba(0, 0, 0, 0.5)'
		                   }
		               }
		           }
		       ]
		});
	}
}
</script>

<style>
</style>