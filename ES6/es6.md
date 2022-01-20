var被看成是JavaScript语言上的设计错误

##### let可以看成是完美的var

##### 1.块级作用域

```javascript
{
  var name = 'why'
  console.log(name)
}
console.log(name)//也可以打
```

##### 2.没有块级作用域引起的问题，if的块级

```javascript

var func;
if(true){
  var name = 'why';
  func = function(){
    console.log(name);
  }
  func()//正常没问题
}
name = 'kobe';//在外面随便改name
func()
```

##### 3.没有块级作用域引起的问题，for循环

```javascript
var btns = document.getElementsByTagName('button');
for(var i = 0;i<btns.length;i++){
  btns[i].addEventListener('click',function(){
    console.log('第'+i+'个按钮被点击')//每个按钮都打印5 ，因为 i 随着循环被改掉了
  })
}
//传统采用闭包解决 为什么，因为函数是一个作用域的
var btns = document.getElementsByTagName('button');
for(var i = 0;i<btns.length;i++){
  (function(i){
     	btns[i].addEventListener('click',function(){
    	console.log('第'+i+'个按钮被点击')//每个按钮都打印5 ，因为 i 随着循环被改掉了
  	})
  })(i)
}
//函数作用域
var name = 'why'
function abc(name){
  console.log(name)
}
name = 'kobe'
abc('hhhh')//输出hhhh
```

ES5之前因为if和for都没有块级作用域的概念，所以在很多时候，我们都必须借助于function的作用域来解决应用外面变量的问题，在ES6中加了let，let有if 和for 块级的作用域



### 在开发中优先使用const

1.const定义的不可修改

2.使用const时必须赋值

3.指向的对象不能修改，但对象属性可以修改

### 对象的增强写法

