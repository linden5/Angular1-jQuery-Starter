import 'angular-ui-router'

import './view';
import './service';
import './component';
import './config';

// 每个文件夹下有一个js收集该文件夹中的所有js
angular.module('app', [
    'view',
    'service',
    'component',
    'config'
]).config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
}]);