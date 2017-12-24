const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        proxy: {
            '/demo/main': {
                target: 'http://www.jeasyui.com',
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});