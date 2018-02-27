import io from 'socket.io-client';
import {ROOT, EVENT} from '../config/websocket';



function assembleQueryString(obj) {
    var queryString = [];
    var keys = Object.keys(obj);
    keys.forEach((key) => {
        queryString.push(key + '=' + obj[key]);
    });

    return queryString.join('&');
}

var sockets = {}
export function getSocket(queryObject) {
    var key = JSON.stringify(queryObject);
    var socket = sockets[key];

    if (!socket) {
        
        sockets[key] = io.connect(ROOT, {
            query: assembleQueryString(queryObject)
        });
        socket = sockets[key];
    
        socket.on('connect', (data) => {
            console.log('Websocket connected')
        });

        socket.on(EVENT.EXAMPLE, (data) =>{
            console.log(EVENT.EXAMPLE + ':' + JSON.stringify(data))
        })
    }

    return socket;
}

export function disconnect(queryObject) {
    console.log('close websocket')
    var key = JSON.stringify(queryObject);
    var socket = sockets[key];
    if (socket) {
        socket.disconnect();
        sockets[key] = null;
    }
}