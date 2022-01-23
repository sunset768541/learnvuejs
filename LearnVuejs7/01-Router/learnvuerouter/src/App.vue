<template>
  <div id="app">
    <!--    router 默认被渲染为a标签-->
    <!--    可以通过tag指定渲染标签-->
    <!--    增加replace 可以使得标签跳转后。浏览器的前进返回按钮无效-->
    <!--    <router-link to="/home">首页</router-link>-->
    <!--  active-class 可以指定活跃控件的class名称 也可以在路由中配置linkActiveClass-->
    <!--    <router-link to="/about" tag="button">关于</router-link>-->


    <button @click="homeClick">Home</button>
    <button @click="aboutClick">Home</button>
    <router-view></router-view>
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
    }
  }
}
</script>

<style>

</style>
