//只用webpack 命令就可以实现打包的配置  配置完成后输入webpack就可以打包了  一般不这样做，都是在npm 的
//script脚本中写入命令， "build":"webpack" 这样可以执行npm run build就可以执行webpack命令了
//此外脚本中的webpack优先使用本地的
// npm install webpack@3.6.0 --save-dev 开发时依赖,安装到本地

const path = require('path') //需要用npm安装这个包 npm init生成package.json
module.exports = {
    entry: './src/main.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}