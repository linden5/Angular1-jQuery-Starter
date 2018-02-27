import {intToFixed2} from '../util/stringUtil';

angular.module('filter', [])
    .filter('countDown', function() {
        return function(seconds) {
            if (!isNaN(seconds)) {
                var second = seconds % 60;
                var minutes = Math.floor(seconds / 60);
                var minute = minutes % 60;
                var hour = Math.floor(minutes / 60);
                return [intToFixed2(hour), intToFixed2(minute), intToFixed2(second) ].join(':');
            } else {
                return '00:00:00';
            }
        }
    })