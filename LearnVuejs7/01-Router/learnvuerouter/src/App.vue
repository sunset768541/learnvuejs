<template>
  <div id="app">
    <!--    router 默认被渲染为a标签-->
    <!--    可以通过tag指定渲染标签-->
    <!--    增加replace 可以使得标签跳转后。浏览器的前进返回按钮无效-->
    <!--        <router-link to="/home">首页</router-link>-->
    <!--      active-class 可以指定活跃控件的class名称 也可以在路由中配置linkActiveClass-->
    <!--        <router-link to="/about" tag="button">关于</router-link>-->


    <!--    <button @click="homeClick">Home</button>-->
    <!--    <button @click="aboutClick">Home</button>-->


    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!--    <router-link to="/profile">档案</router-link>-->
    <router-link :to="{
      path:'/profile',query:{name:'name',age:13,height:1.22}}">档案
    </router-link>
    <button @click="profileClick">档案</button>

    <!--    通过include exclude正则来包含和排除某些组件 exclude不能随便加空格 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    },
    profileClick() {
      this.$router.push({path: 'profile', query: {name: 'name', age: 13, height: 1.22}})
    }
  },
  data() {
    return {
      userId: 'fsdfsfsfd'
    }
  }
}
</script>

<style>

</style>
