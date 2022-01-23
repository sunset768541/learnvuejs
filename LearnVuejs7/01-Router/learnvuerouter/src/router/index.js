import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象

const routes = [
  {
    path: '/home',
    component: Home
  }, {
    path: '/about',
    component: About
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/user/:userId',
    component: User
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})

//3
export default router

