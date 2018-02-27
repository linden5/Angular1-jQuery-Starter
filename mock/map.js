import * as fs from 'fs'
import * as path from 'path'
import socketIO from 'socket.io'

import {EVENT} from '../src/config/websocket'
import {METHOD} from '../src/config/api'
import { setInterval, clearInterval } from 'timers';

const ROOT = ''

function requestMapping(app, path, file) {
    app.get(ROOT + path, function(req, res) {
        res.json(require(file))
    })
}

function initHttp(app) {
    console.log('initialize http server')
    fs.readdir(path.join(__dirname, './data/'), (err, files) => {
        if (err) {
            throw Error('can not read json files from disk')
        }
        files.forEach((file) => {
            var matches = (/^(.*)\.json$/i).exec(file);
            if (matches && matches.length > 1) {
                var methodName = matches[1];
                console.log(methodName)
                console.log(METHOD[methodName])
                requestMapping(app, METHOD[methodName], './data/' + file)
            }
        }) 
        console.log('mock server initialized: ' + files.length)
    })
}

function initSocket(server) {
    console.log('initialize websocket server')
    var io = socketIO(server)

    fs.readdir(path.join(__dirname, './socket/'), (err, files) => {
        if (err) {
            throw Error('can not read json files from disk')
        }

        io.on('connection', (socket)=>{
            console.log('user connected')

            files.forEach((file) => {
                var matches = (/^(.*)\.json$/i).exec(file);
                if (matches && matches.length > 1) {
                    var eventName = matches[1];
                    var count = 0;
                    var data = require('./socket/' + file);
                    var timer = setInterval(() => {
                        socket.emit(EVENT[eventName], data)
                        // console.log(eventName + ':'+ count)
                        count++
                        if (count === 100) {
                            clearInterval(timer)
                        }
                    }, 2000)
                }
            }) 
        })

        console.log('websocket server initialized: ' + files.length)
    })
}

export default function mockInit(app, server) {
    initHttp(app);
    initSocket(server)
}