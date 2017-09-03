// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router/index.js'
import vueResource from 'vue-resource'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/*lxy 2017/8/5*/
import 'font-awesome/css/font-awesome.css'
/*import $ from 'jquery'*/

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vueResource)
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
	if (window.sessionStorage.getItem("Info")===null) {
		if(to.path!=='/login' && to.path!=='/register'){
			next({ path: '/login' });
		}
		else{
			next();
		}
	}
	else{
		next();
	}
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
