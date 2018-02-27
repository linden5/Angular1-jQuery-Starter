const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var CONTEXT_PATH = path.resolve(__dirname, '../');

module.exports = {
    context: CONTEXT_PATH,
    plugins: [
        new CleanWebpackPlugin(['./dist'], {
            root: CONTEXT_PATH
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            angular: 'angular',
            moment: 'moment',
            _: 'lodash',
            jQuery: 'jquery',
            $: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                    path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname + '../src/'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            outputPath: 'static/image/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: require.resolve('angular'),
                loader: 'exports-loader?window.angular'
            }
        ]
    }
};