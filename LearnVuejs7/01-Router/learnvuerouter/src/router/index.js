import VueRouter from 'vue-router'
import Vue from 'vue'
const Home  = ()=>import("../components/Home");
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象

const routes = [
  {
    path: '/home',
    component: Home
  }, {
    path: '/about',
    component: () => import("../components/About")//懒加载写法
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/user/:userId',
    component: () => import("../components/User")
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})

//3
export default router

