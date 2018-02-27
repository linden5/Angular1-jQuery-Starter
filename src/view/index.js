import '../component/index';
import '../service/index';

// 页面Controller收集，需要依赖对应的页面模块
// 直接在路由中引用controller函数而不是预定义的controller名字会报错

import {viewInit} from '../util/angularUtil';
import indexView from './index/index';
import loginView from './login/login';
import mainView from './main/main';


// 引入的页面模块需要作为依赖加入，最好是一个页面一个模块，管理起来比较方便
var module = angular.module('view', [
    'ui.router',
    'component',
    'service'
]);

viewInit(
    module,
    indexView,
    loginView,
    mainView
);


