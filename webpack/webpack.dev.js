const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const config = require('../config/config');
const common = require('./webpack.common');
const profile = require('../config/profile');

module.exports = merge(common, {
    entry: {
        main: ['webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000', './src/index.js']
    },       
    output: {
        filename: 'static/script/[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': profile.dev
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: config.sassOption
                    }
                    
                ]
            }
        ]
    }
});