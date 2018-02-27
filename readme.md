### Angular1-jQuery-Starter

针对因为各种原因，选择了Angular1作为前端开发框架，同时又需要使用到jQuery插件的项目的starter

demo中使用到了[jQuery-easyui](http://www.jeasyui.com/)

即便是同时使用了Angular1和jQuery，也建议将使用jQuery插件的部分封装为directive，否则会导致代码难以维护。

#### 命令说明
开发模式: npm run dev
构建项目：npm run build

开发环境的搭建参考了vue-cli的webpack-simple项目

#### Mock服务器说明
Mock服务器相关代码在./mock目录下
./mock/data中存放的是http接口mock数据
./mock/socket中存放的是websocket接口mock数据
数据文件名对应于./src/config/api.js与./src/config/websocket.js中定义的接口名称

当./config/proxy.js中的代理配置被注释掉时，就会启动Mock服务器，否则将不会启动

