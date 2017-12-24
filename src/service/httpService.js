angular.module('service').service('httpService', ['$http', function($http) {
    var CACHE = true;
    var TIMEOUT = 15000;

    var basicConfig = {
        cache:  CACHE,
        timeout:TIMEOUT
    };

    this.get = function(url, params) {
        var config = angular.extend(basicConfig, {
            method: 'get',
            url:    url,
            params: params
        });

        return $http(config);
    };

    this.post = function(url, data) {
        var config = angular.extend(basicConfig, {
            method: 'post',
            url:    url,
            data:   data
        });

        return $http(config);
    };
}]);