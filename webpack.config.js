const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/app/index.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.ttf$/,
                use: ['file-loader']
            }
        ],
    },
    plugins: [
        new MonacoWebpackPlugin({
            languages: []
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/public', to: ''}
            ]
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        // alias: {vue: 'vue/dist/vue.esm.js'} //runtime rendering
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};