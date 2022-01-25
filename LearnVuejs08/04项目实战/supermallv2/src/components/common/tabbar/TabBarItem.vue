<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-active-icon"><slot name="item-active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
    <!--    插槽这样被替换，不会有active 类加到替换过来的标签上  推荐上面的写法用div包装-->
    <!--    <slot  :class="{active:isActive}" name="item-text"></slot>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor}:{}
    }
  },
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'pink'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
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

/*.active {*/
/*  color: pink; 没用了*/
/*}*/

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  /*去除图片下部多出来的3个像素*/
  vertical-align: middle;
}
</style>
