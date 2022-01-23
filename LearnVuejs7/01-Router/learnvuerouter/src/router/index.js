import VueRouter from 'vue-router'
import Vue from 'vue'
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象

const routes = []
const router = new VueRouter({
  routes
})

//3
export default router

