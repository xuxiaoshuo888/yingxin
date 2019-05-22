import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./views/login/login.vue')
        },
        {
            path: '/desk',
            name: 'desk',
            component: () => import('./views/desk/desk.vue')
        },
        {
            path: '/fees',
            name: 'fees',
            component: () => import('./views/fees/fees.vue')
        },
        {
            path: '/greenPath',
            name: 'greenPath',
            component: () => import('./views/greenPath/greenPath.vue')
        }
    ]
})
