import Vue from 'vue'
import Vuex from 'vuex' // 新增vuex
import App from './App'
import router from './router'
import store from '@/vuex/store.js'   // 新增vuex
import api from '@/http/api.js'       // 新增http请求
import less from 'less'               // 新增less
import Mint from 'mint-ui';    // 新增引入UI库
import 'mint-ui/lib/style.css' // 新增引入UI库中的样式
Vue.use(Mint);                  // 新增
Vue.config.productionTip = false
Vue.prototype.$api = api; // 新增

// 用钩子函数beforeEach()对路由进行判断
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
    if (store.state.login.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {    //如果没有权限,重定向到登录页,进行登录
      next({
        path: '/login',
      })
    }
  }
  else { //不需要权限 直接跳转
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
