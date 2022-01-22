import {flag, sum} from "./aaa.js";


if (flag) {
    console.log(sum(199, 22));
    console.log('小明是天才，哈哈哈');
}

//对应export5 可以自定义导入的功能名称
import addr from './aaa.js'

console.log(addr)


//如果需要导入的内容很多
import * as aaa from  './aaa.js'
console.log(aaa.flag)
