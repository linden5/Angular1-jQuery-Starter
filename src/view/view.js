import '../component/component';

// 页面Controller收集，需要依赖对应的页面模块
// 直接在路由中引用controller函数而不是预定义的controller名字会报错
import './index/index';
import './login/login';
import './main/main';

// 引入的页面模块需要作为依赖加入，最好是一个页面一个模块，管理起来比较方便
angular.module('view', [
    'component',
    'index',
    'login',
    'main'
]);