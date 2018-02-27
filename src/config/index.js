import * as API from './api';
import * as SOCKET from './websocket';

angular.module('config', ['service', 'ui.router'])
    .constant('API', API)
    .constant('SOCKET', SOCKET)
    // 路由事件触发
    .run(['$transitions', function($transitions) {
        $transitions.onBefore({}, function(trans) {
            console.log('before')
        })
        $transitions.onEnter({}, function(trans) {
            console.log('enter')
        })
    }])