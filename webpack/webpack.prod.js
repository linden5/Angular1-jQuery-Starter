const path = require('path');
const merge = require('webpack-merge');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = require('../config/config');
const common = require('./webpack.common');
const profile = require('../config/profile');


module.exports = merge(common,{
    entry: './src/index.js',
    output: {
        filename: 'static/script/[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: config.sassOption
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': profile.prod
        }),
        new ExtractTextPlugin('static/style/[name].[hash].css'),
        new UglifyJsPlugin()
    ]
});