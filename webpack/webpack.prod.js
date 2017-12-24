const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common,{
    output: {
        filename: 'script/[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style/[name].[hash].css')
    ]
});