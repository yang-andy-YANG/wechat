import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import Coming from '@/pages/Coming'
import Confirm from '@/pages/Confirm'
import _404 from '@/pages/404'
import store from '@/store'

Vue.use(Router)

let router = new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            meta: {
                requireAuth: false,
                name: '报名'
            },
        },
        {
            path: '/Detail',
            name: 'Detail',
            component: Detail,
            meta: {
                requireAuth: false,
                name: '套餐详情'
            },
        },
        {
            path: '/Confirm',
            name: 'Confirm',
            component: Confirm,
            meta: {
                requireAuth: false,
                name: '支付'
            },
        },
        {
            path: '/Coming',
            name: 'Coming',
            component: Coming,
            meta: {
                requireAuth: false,
                name: '建设中'
            },
        },
        {
            path: '/404',
            name: 'NotFound',
            component: _404,
            meta: {
                requireAuth: false,
                name: '页面走失'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    let state = store.state

    // 设置默认的浏览器标签标题
    if (to.meta.name) {
        document.title = to.meta.name
    }
    else {
        document.title = 'WeChat'
    }

    if (to.meta.requireAuth) {
        if (state.userInfo && state.userInfo.token) {
            next();
        }
        else {
            next({
                name: 'Login',
                query: { redirect: to.fullPath }
            })
        }
    }
    else {
        next();
    }
})

export default router
