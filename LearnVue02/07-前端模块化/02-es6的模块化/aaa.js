var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
    return num1 + num2;
}


if (flag) {
    console.log(sum(1, 2))
}

export {//导出方式1
    flag, sum
}

//导出方式2
export var num1 = 1000;
export var num2 = 11.22;

//3.导出函数和类
export function mul(num1, num2) {
    return num1 * num2;
}
export class Person {
    run(){
        console.log('run')
    }
}

//5. export default 我导出了一个功能，但是命名由用户确定 export在同一个模块中不允许同时存在多个
var address = '北京'
export default  address