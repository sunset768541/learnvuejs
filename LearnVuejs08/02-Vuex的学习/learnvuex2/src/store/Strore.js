import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 10
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decreament(state) {
      state.counter--
    }
  },

  actions: {},
  getters: {
    getPow(state){
      return state.counter*state.counter
    }
  },
  modules: {}
})

export default store
