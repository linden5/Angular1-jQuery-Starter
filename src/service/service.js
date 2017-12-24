angular.module('service', [])

// 不使用import而使用require,以确保在新建service模块后再调用注册service的函数
require('./httpService')