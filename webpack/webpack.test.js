'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'tslint',
                test: /\.ts$/
            },

            {
                loader: 'raw',
                test: /\.(css|html)$/,
                exclude: /node_modules/, 
                loader: 'ts', test: /\.ts$/
            }
        ]
    },

    resolve: {
          extensions: ['*', '.js', '.ts'],
          moduleExtensions: ["-loader"],
          alias:{
              mydir: path.resolve('.', 'src')
            }
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                tslint: {
                    emitErrors: true,
                    failOnHint: true
                }
            }
        })
    ]
};