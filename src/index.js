import 'angular-ui-router'

import './view/view';
import './service/service';
import './component/component';
import './config/config';

// 每个文件夹下有一个js收集该文件夹中的所有js
angular.module('app', [
    'view',
    'service',
    'component',
    'config'
]).config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
}]);