const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: { 
        jsx_bundle: "./src/App.jsx",
        vendor: ['react', 'react-dom', 'react-router-dom', 'remarkable', 'whatwg-fetch', 'es6-shim']
    },
    output: {
        path: path.resolve(__dirname, 'docs/bundles'),
        filename: '[name].js',
        // libraryTarget: 'umd',
        // library: 'Landing'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
      new ExtractTextPlugin("jsx_styles.css"),
      new webpack.optimize.CommonsChunkPlugin({
            // The order of this array matters
            names: ["common", "vendor"],
            // minChunks: 2
            reuseExistingChunk: true,
        })
    ]    
};