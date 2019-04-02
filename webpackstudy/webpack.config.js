const path = require('path')

const webpack = require('webpack')

//导入内存中生成html的插件 只要是插件都要放在 plugin 
const htmlWebpackPlugin = require('html-webpack-plugin')

//node 向外暴露一个配置文件
module.exports = {
    entry:path.join(__dirname,'./src/main.js'), //入口
    output:{
        path:path.join(__dirname,'./dist'), //指定 打包好的路径 
        filename:'bundle.js'    //这个是指定的输入的文件名称
    },
    devServer:{             //配置Devserver 命令的第二种方式
        open:true,          //自动打开游览器
        port:3000,           //端口
        contentBase:'src',
        hot:true
    },
    plugins:[       //配置插件的节点
        new webpack.HotModuleReplacementPlugin(),            //热更新的对象

        new htmlWebpackPlugin({
            template:path.join(__dirname ,'./src/index.html'),
            filename:'index.html'
        })         //创建一个内存中生成html插件
    ],
    module:{    //这个节点 用于配置 所有的第三方模块
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},   //
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
        ]
    }
}