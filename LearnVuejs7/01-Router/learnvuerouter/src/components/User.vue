<template>
  <div>
    <h2>我是用户界面
    </h2>
    <p>我是用户的信息</p>
    <!--    -->
    <h2>{{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //.$route当前活跃的路由
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
