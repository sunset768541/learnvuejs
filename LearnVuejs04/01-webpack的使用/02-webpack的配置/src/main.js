const {add} = require('./js/mathUtils')//commonjs模块化
console.log(add(20, 10));
import {age, name, sex} from './js/info'//es6模块化
console.log(name, age)