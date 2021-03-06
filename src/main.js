// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store/'
import App from './App'
import FastClick from 'fastclick'
import { WechatPlugin } from 'vux'

Vue.use(WechatPlugin)
console.log(Vue.wechat)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app-box',
    router,
    store,
    template: '<App/>',
    components: { App }
});