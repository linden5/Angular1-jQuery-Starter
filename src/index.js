import 'material-date-picker/build/styles/mbdatepicker.css';

import '@uirouter/angularjs';
import 'moment';
import 'material-date-picker/build/mbdatepicker.js';

import './view';
import './service';
import './component';
import './config';

// 每个文件夹下有一个js收集该文件夹中的所有js
angular.module('app', [
    'view',
    'service',
    'component',
    'config',
    'materialDatePicker'
]).config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
}]);