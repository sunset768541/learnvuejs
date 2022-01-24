<template>
  <div class="tab-bar-item">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>

    <!--    插槽这样被替换，不会有active 类加到替换过来的标签上  推荐上面的写法用div包装-->
    <!--    <slot  :class="{active:isActive}" name="item-text"></slot>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.active {
  color: pink;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  /*去除图片下部多出来的3个像素*/
  vertical-align: middle;
}
</style>
