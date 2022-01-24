<template>
  <div>
    <h2>
      Home组件我是首页的
    </h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {path: '/home/news'}
  },
  created() {
    console.log('home create');
  },
  destroyed() {
    console.log('home destory');
  },
  activated() {//和deactived 只有使用keep-alive是才是有效的
    console.log(this.path)
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>
