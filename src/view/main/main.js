angular.module('main', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state({
            name: 'main',
            url: '/main',
            template: require('./main.html'),
            controller: 'mainController'
        });
    }])
    .controller('mainController', [function() {
        console.log('main')
    }])