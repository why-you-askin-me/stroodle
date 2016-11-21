import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
import path from 'path'

const browsers = ['last 2 versions', 'ie >= 10']
const res = path.resolve(__dirname, 'res')

const server = path.resolve(__dirname, 'src/server/')
const client = path.resolve(__dirname, 'src/client/')
const buildClient = path.resolve(__dirname, 'build/client')
const buildServer = path.resolve(__dirname, 'build/server')

const loaders = [
    {
        test: /\.jsx?$/,
        loader: 'babel',
    },
    {
        test: /\.styl$/,
        loaders: ['style', 'css', 'postcss', 'stylus'],
    },
    {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'file',
    },
]

const resolve = {
    extensions: ['', '.js', '.jsx', '.styl'],
    alias: {
        res,
    },
}

const serverConfig = {
    entry: server + '/main.js',
    target: 'node',
    output: {
        path: buildServer,
        filename: 'stroodle.js',
    },
    module: { loaders },
    resolve,
}

const clientConfig = {
    entry: [
        client + '/main.styl',
        client + '/main.jsx'
    ],
    output: {
        path: buildClient,
        filename: 'stroodle.[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: client + '/index.html',
        }),
        new CopyWebpackPlugin([
            { to: buildClient, from: res },
        ]),
    ],
    postcss: [ autoprefixer({ browsers }) ],
    module: { loaders },
    resolve,
}

module.exports = [serverConfig, clientConfig]
