<template>
  <div id="home">
    <NavBar class="home-nav"><h4 slot="center">购物街</h4></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import {getHomeMultiData, getHomeGoods} from "network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from './childComps/FearureView'
import GoodsList from "components/content/goods/GoodsList";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop'
    }
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 网络请求
     */

    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
          console.log(res)
          //...解构数组元素一个一个取出来   push 可以传很多个数字
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page = this.goods[type].page + 1
        }
      )
    },
    tabClick(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #e9e9e9;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
