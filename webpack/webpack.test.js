'use strict';

const path = require('path');
const webpack = require('webpack');
const rootDir = path.resolve(__dirname, '..');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.js', '.ts'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders:
                {
                    loader: 'awesome-typescript-loader',
                    options: path.resolve(rootDir, 'tsconfig.json')
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.css$/,
                exclude: [/node_modules/, /\.(spec)\.js$/],

                exclude: path.resolve(rootDir, 'src'),
                loader: 'null-loader'
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/, /\.(spec)\.js$/],

                include: path.resolve(rootDir, 'src'),
                loader: 'raw-loader'
            }
        ]
    },
};