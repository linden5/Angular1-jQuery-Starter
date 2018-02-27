import './index.scss'

import { getSocket } from '../../util/websocket'

export default {
    name: 'index',
    url: '/',
    template: require('./index.html'),
    controller: function() {
        console.log('index')
        getSocket({})
    }
}