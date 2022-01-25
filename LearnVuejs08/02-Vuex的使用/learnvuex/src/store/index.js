import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//插件安装

//2创建对象

const store = new Vuex.Store({
  state: {counter: 0},
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})


//3导出 store对象

export default store
