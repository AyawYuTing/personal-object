import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import { http } from './common/utils/lush';
Vue.prototype.$http = http;
Vue.prototype.$store = store;

Vue.use(Vuex)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
