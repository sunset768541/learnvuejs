import Vue from 'vue'
import App from './App'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
//
// axios({url: 'http://123.207.32.32:8000/home/multidata', method: 'get'})
//   .then(res => {
//     // console.log('网络请求数据: ', res)
//   })
// axios({url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'})
//   .then(res => {
//     // console.log('网络请求数据: ', res)
//   })
// axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     //针对get请求的拼接
//     params: {
//       type: 'pop',
//       page: 1
//     }
//   },
// ).then(res => {
//   // console.log('网络请求数据: ', res)
// })
//

//3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// //2.发送2个请求，都完成后回调给then
// axios.all([axios({url: '/home/multidata'}),
//   axios({
//     url: '/home/data',
//     //针对get请求的拼接
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })]).then(
// //     result => {
// //   console.log(result)
// // })
//   axios.spread((res1, res2) => {
//     console.log("我是数据", res2)
//     console.log("我是res1", res1)
//   })
// )

//4 创建axios对应的实例
const instance1 = axios.create({baseURL: 'http://123.207.32.32:8000', timeout: 5000})
instance1({url: '/home/multidata'}).then(res => {
  // console.log("实例1：", res);
})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  // console.log("实例1：", res);
})

//创建实例2
// const instance2 = axios.create({baseURL: 'http://222.207.32.32:8000', timeout: 6000})
// instance2({url: '/home/multidata'}).then(res => {
//   console.log("实例2：", res);
// })
