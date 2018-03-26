// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import utilHttp from './api/apiHttp'
import utilApi from './api/apiUtil'
import store from './vuex/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.prototype.$http = axios
Vue.prototype.utilHttp = utilHttp
Vue.prototype.utilApi = utilApi;
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,store,
    components: { App },
    template: '<App/>'
})