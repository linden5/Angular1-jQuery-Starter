angular.module('login', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state({
            name: 'login',
            url: '/login/{id}',
            template: require('./login.html'),
            controller: 'loginController'
        });
    }])
    .controller('loginController', ['$scope', '$stateParams', 'httpService', 'apiBase', 'method',
    function($scope, $stateParams, httpService, apiBase, method) {
        $scope.alertInput = function() {
            alert($scope.input)
        };

        $scope.id = $stateParams.id;

        httpService.get(apiBase + method.example).then(function({data}) {
            $scope.result = data.rows;
        })
    }])