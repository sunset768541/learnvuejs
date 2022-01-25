import Vue from 'vue'
import App from './App'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios({url: 'http://123.207.32.32:8000/home/multidata'}).then(res => {
  console.log('网络请求数据: ',res)
})
