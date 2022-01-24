import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import("../components/Home");
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const Profile = () => import('../components/Profile')
const routes = [
  {
    path: '/home',
    component: Home,
    children: [{
      path: 'news',
      component: HomeNews
    }, {
      path: 'message',
      component: HomeMessage
    }, {
      path: '',
      redirect: 'news'
    }],
    meta: {title: '首页'}
  }, {
    path: '/about',
    component: () => import("../components/About"),//懒加载写法
    meta: {title: '关于'}
  },
  {
    path: '/',
    redirect: '/home',

  },
  {
    path: '/user/:userId',
    component: () => import("../components/User"),
    meta: {title: '用户'}
  },
  {
    path: '/profile',
    component: Profile,
    meta: {title: '档案'}
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})
router.beforeEach((to, from, next) => {

  // document.title = to.meta.title //首页这样写有问题,有路由的嵌套
  document.title = to.matched[0].meta.title
  next()//必须要写的
})
//3
export default router

