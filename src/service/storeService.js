import Store from './store';
import storeConfig from '../config/store';

export default {
    name: 'storeService',
    constructor: ['$rootScope', function($rootScope) {
        const store = new Store(storeConfig);
        this.store = store;
        $rootScope.store = store;
    }]
}