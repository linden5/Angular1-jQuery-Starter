const SUCCESS_CODE = '000000'
const CHANNEL_CODE = '04'//交易系统的渠道号

export default {
    name: 'httpService',
    constructor:  ['$http', '$q',function($http, $q) {
        var CACHE = false;
        var TIMEOUT = 15000;
   
        var basicConfig = {
            cache:  CACHE,
            timeout:TIMEOUT,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };

        function getCommonParam() {

            return {
                commonParams: ''
            }
        }

        const successCallback = (defer, res) => {
            console.log('success resp:' + JSON.stringify(res))
            defer.resolve(res)
        }
        
        const errorCallback = (defer, res) => {
            console.log('error resp:' + JSON.stringify(res))
            if (res.status === 401) {

            } else if (res.status === 502) {

            } else if (res.status === 500) {

            }
            defer.reject(res.statusText);
        }
    
        this.get = function(url, params) {
            var config = angular.extend({
                method: 'get',
                url:    url,
                params: angular.extend(params || {}, getCommonParam())
            }, basicConfig);
            
            var defer = $q.defer();
            $http(config).then(
                successCallback.bind(this, defer), 
                errorCallback.bind(this, defer));

            return defer.promise;
        };
    
        this.post = function(url, data) {
            var config = angular.extend({
                method: 'post',
                url:    url,
                data:   angular.extend(data || {}, getCommonParam())
            }, basicConfig);
    
            var defer = $q.defer();
            $http(config).then(
                successCallback.bind(this, defer), 
                errorCallback.bind(this, defer));
                
            return defer.promise;
        };
    }]
}