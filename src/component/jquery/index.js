import { componentInit } from '../../util/angularUtil'

import datagrid from './datagrid/index';

componentInit(
    angular.module('jqueryComponent', []),
    datagrid
)
