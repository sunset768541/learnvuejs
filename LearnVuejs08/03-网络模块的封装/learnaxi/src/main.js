import Vue from 'vue'
import App from './App'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios({url: 'http://123.207.32.32:8000/home/multidata', method: 'get'})
  .then(res => {
    // console.log('网络请求数据: ', res)
  })
axios({url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'})
  .then(res => {
    // console.log('网络请求数据: ', res)
  })
axios({
    url: 'http://123.207.32.32:8000/home/data',
    //针对get请求的拼接
    params: {
      type: 'pop',
      page: 1
    }
  },
).then(res => {
  // console.log('网络请求数据: ', res)
})

//2.发送2个请求，都完成后回调给then
axios.all([axios({url: 'http://123.207.32.32:8000/home/multidata'}),
  axios({
    url: 'http://123.207.32.32:8000/home/data',
    //针对get请求的拼接
    params: {
      type: 'sell',
      page: 1
    }
  })]).then(
//     result => {
//   console.log(result)
// })
  axios.spread((res1, res2) => {
    console.log("我是数据", res2)
    console.log("我是res1", res1)
  })
)
