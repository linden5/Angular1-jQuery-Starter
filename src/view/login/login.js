export default {
    name: 'login',
    url: '/login/{id}',
    template: require('./login.html'),
    controller: ['$scope', '$stateParams', 'httpService', 'API', 
    function($scope, $stateParams, httpService, API) {
        $scope.alertInput = function() {
            alert($scope.input)
        };

        $scope.id = $stateParams.id;

        httpService.get(API.ROOT + API.METHOD.EXAMPLE).then(function({data}) {
            $scope.result = data.rows;
        })
    }]
}