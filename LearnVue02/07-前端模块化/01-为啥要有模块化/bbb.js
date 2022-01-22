//小红开发的模块
var moduleB = (function (){
    var obj= {};
    var flag = false;
    function sum(num1,num2){
        console.log("小红的被调用了：",num2+num1);
        return num1+num2;
    }
    obj.flag = flag;
    obj.sum = sum;
    return obj;
})()