//加载jquery
//import 使用的是es6 语法高级执行不了
//npm i webpack -g
//ul>li*10{这个是第$个}
//npm init -y
//npm i jquery -S
//webpack .\src\main.js .\dist\bundle.js 
//npm install webpack-cli -g    
// webpack 可以处理js之间的依赖关系
// webpack 处理js 兼容问题
// 输入 webpack 自动打包 
// 在webpack.config.js文件里

//修改代码之后自动打包编译 webpack-dev-server
//运行 npm i webpack-dev-server -D
//安装完之后 这个工具的用法 和 webpack 用法  一样
//由于我们使用的是项目中的webpack-dev-server 无法使用脚本命令只有全局安装的 -g 命令
//webpack-dev-server 再本地项目中 安装 webpack || npm i webpack -D
//npm run dev   //自动打印 自动刷新

//页面放在内存里 npm i html-webpack-plugin

import $ from 'jquery';

//导入link css 资源
import './css/index.css';
import './css/index.less';
import './css/index.scss';
//webpack默认只能打包处理js 文件 无法处理非js 文件
//如果需要处理非js 文件的话需要一些loader 
//npm i style-loader css-loader -D
//在webpack.config.js 这个配置文件在里面 新增一个配置的节点 叫做 module 

//npm i less-loader npm i less -D

//npm i sass-loader -D npm i node-sass -D

//注意 发现不是一个js 文件 在webpack.config.js 文件内查询有没有对应的第三方laoder 
//如果找到了都对应的规则的时候，使用该loader处理
//执行的的顺序是从后到钱
$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor',function(){
        return '#'+'ccc'
    })
})