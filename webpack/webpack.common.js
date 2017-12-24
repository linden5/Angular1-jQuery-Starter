const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var contextPath = path.resolve(__dirname, '../');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['./dist'], {
            root: contextPath
        }),
        new HtmlWebpackPlugin({
            title: 'Angular1 starter',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            angular: 'angular'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    module: {
        rules: [
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
                            limit: 1000,
                            outputPath: 'image/'
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