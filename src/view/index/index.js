import './index.scss'

angular.module('index', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state({
            name: 'index',
            url: '/',
            template: require('./index.html'),
            controller: 'indexController'
        });
    }])
    .controller('indexController',  function() {
        console.log('index')
    })