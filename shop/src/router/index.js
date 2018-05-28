import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = () => import('@/views/Index.vue')
const Category = () => import('@/views/Category.vue')
const CategoryMain = () => import('@/components/category/main.vue')
const Car = () => import('@/views/Car.vue')
const User = () => import('@/views/User.vue')
const Detail = () => import('@/views/Detail.vue')
const Search = () => import('@/views/Search.vue')
const Pay = () => import('@/components/car/pay/pay.vue')
const Login = () => import('@/views/login.vue')


export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: Index
  }, {
    path: '/category',
    name: '分类页',
    redirect: '/category/all',
    component: Category,
    children: [{
      path: '/category/:tab',
      component:CategoryMain
    }]
  }, {
    path: '/car',
    name: '购物车页',
    component: Car
  }, {
    path: '/car/pay',
    name: '支付页',
    component: Pay
  },
    {
      path: '/user',
      name: '用户页',
      component: User,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      },
    }, {
      path: '/detail',
      name: '详情页',
      component: Detail
    }, {
      path: '/search',
      name: '搜索页',
      component: Search
    },{
      path: '/login',
      name: '登录页',
      component: Login
    }
  ]
})
