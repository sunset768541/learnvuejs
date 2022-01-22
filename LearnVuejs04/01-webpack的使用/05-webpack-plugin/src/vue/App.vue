<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <h2 class="title">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: '你好',
      name: 'why nody'
    }
  },
  methods: {
    btnClick() {
    }
  }
}
</script>

<style scoped>
.title {
  color: aqua;
}
</style>