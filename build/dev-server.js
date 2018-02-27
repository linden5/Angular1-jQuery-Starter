const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('../webpack/webpack.dev')
const opn = require('opn')
const proxyTable = require('../config/proxy')
const mockInit = require('../mock')

const app = express();
const server = require('http').Server(app)
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  reload: true,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
})

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// proxy api requests
var proxyKeys = Object.keys(proxyTable);
const isUsingProxy = proxyKeys.length > 0;
if (isUsingProxy) {
    proxyKeys.forEach(function (context) {
        var options = proxyTable[context]
        if (typeof options === 'string') {
            options = { target: options }
        }
        app.use(proxyMiddleware(context, options))
    })
}


// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

app.use('/static', express.static('./static'))

module.exports = server.listen(8080, function (err) {
  if (err) {
    console.log(err)
    return
  }

  if (!isUsingProxy) {
    mockInit(app, server)
  }
  opn('http://localhost:8080')
})