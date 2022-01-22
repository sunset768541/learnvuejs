//小明开发的模块
var moduleA = (function (){
    var obj= {};
    var flag = true;
     function sum(num1,num2){
         console.log("小名的被调用了：",num2+num1);
         return num1+num2;
     }
     obj.flag = flag;
     obj.sum = sum;
     return obj;
})()