import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/index/Home'
import Login from '@/pages/login/login'
import SearchList from '../pages/search/SearchList'
import ProductDetail from '../pages/productDetail/ProductDetail'
import Calendar from '../pages/calendar/Calendar'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/SearchList',
            name: 'SearchList',
            component: SearchList
        },
        {
            path: '/ProductDetail',
            name: 'ProductDetail',
            component: ProductDetail
        },
        {
            path: '/Calendar',
            name: 'Calendar',
            component: Calendar
        }
    ]
})