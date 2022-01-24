<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
<!--    <div>-->
<!--      <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--    </div>-->

<!--    主页-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem"
}
</script>

<style scoped>

.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  /*去除图片下部多出来的3个像素*/
  vertical-align: middle;
}
</style>
