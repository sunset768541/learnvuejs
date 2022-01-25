<template>
  <div>
    <NavBar class="home-nav">
      <h4 slot="center">购物街</h4>
    </NavBar>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultiData} from "../../network/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      result: null,
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #e9e9e9;
}
</style>
