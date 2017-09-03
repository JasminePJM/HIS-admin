import Vue from 'vue';
import { api } from '@/global/api.js'//引入静态资源
const item={
	 // 存储状态值
	state: {
		projectTab:'1',
		infoItems:[],
		selectItems:[],
		classify:[],
	},
	mutations: {
		getData(state){
			let k= state;
			//采用this.$http才不用导入vue
			Vue.http.get(api.item).then(function(response){
				k.infoItems=response.data.infoItems;
				k.classify=response.data.classify;
			}, function(response){
				this.$message('请求失败.');
			})
		},
	},
};
export default item;