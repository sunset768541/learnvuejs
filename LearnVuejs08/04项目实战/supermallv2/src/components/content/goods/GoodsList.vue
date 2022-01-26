<template>
  <div class="goods-list">
    <goodslistitem
      v-for="item in goods"
      :goods-item="item" class="item">
    </goodslistitem>
  </div>
</template>

<script>
import goodslistitem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    goodslistitem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
}

.goods-list .item {
  width: 48%;
}
</style>
