<template>
  <h2>
    <p>-------------Hello World 请求的网络数据</p>
    <h3>{{ data }}</h3>
  </h2>
</template>

<script>
import {request, requestDirectReturn, requestWithPromise} from "../network/request";

export default {
  name: "HelloWorld",
  data() {
    return {
      data: ''
    }
  },
  created() {
    // request({url: '/home/multidata'}, success => {
    //   this.data = success
    // }, err => {
    //   console.log(err)
    // })
    // requestWithPromise({url: '/home/multidata'}).then(res => {
    //   this.data = res
    // }).catch(err => {
    //   console.log(err);
    // })
    requestDirectReturn({url: '/home/multidata'}).then(res => {
      this.data = res
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>

</style>
