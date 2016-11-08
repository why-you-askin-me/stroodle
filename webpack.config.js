var webpack = require('webpack');
var path = require('path');

var build = path.resolve(__dirname, 'build');
var src = path.resolve(__dirname, 'src');

var config = {
    entry: src + '/index.jsx',
    output: {
        path: build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            loader: 'babel'
        }]
    },
};

module.exports = config;
