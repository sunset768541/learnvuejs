<template>
  <div>
    <NavBar class="home-nav">
      <h4 slot="center">主页</h4>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #e9e9e9;
}
</style>
