<template>
  <div id="app">
    <div>
      <h2>----------App组件-----------</h2>
      <h2>{{ $store.state.counter }}</h2>
      <button @click="addtion()">+</button>
      <button @click="subtraction()">-</button>
      <HelloWorld></HelloWorld>

      <h2>--------------演示Getters------------</h2>
      <h3>{{ $store.getters.getPow }}</h3>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    addtion() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decreament')

    }
  }
}
</script>

<style>

</style>
