<template>
  <div id="app">
    <router-view ></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar";
import router from "./router";


export default {
  name: 'App',
  router,
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
