const path = require('path')


//node 向外暴露一个配置文件
module.exports = {
    entry:path.join(__dirname,'./src/main.js'), //入口
    output:{
        path:path.join(__dirname,'./dist'), //指定 打包好的路径 
        filename:'bundle.js'    //这个是指定的输入的文件名称
    }
}