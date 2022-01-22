const {add} = require('./js/mathUtils')//commonjs模块化
console.log(add(20, 10));
import {age, name, sex} from './js/info'//es6模块化
console.log(name, age)

//依赖css文件 参考 https://webpack.docschina.org/loaders/css-loader
require('./css/normal.css')
//依赖less文件
require('./css/special.less')

//使用Vue进行开发
import Vue from "vue";
//同时有el和template 将el用template替换


// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})