import {serviceInit, providerInit} from '../util/angularUtil';

// service
import httpService from './httpService';

serviceInit(
    angular.module('service', []),
    httpService
);