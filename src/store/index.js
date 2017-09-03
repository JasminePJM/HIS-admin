import Vue from 'vue';
import Vuex from 'vuex';
import item from './Project/item.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
    	item
    }
});
export default store;