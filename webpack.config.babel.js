import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
import path from 'path'

// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try       { require('os').networkInterfaces(); }
catch (e) { require('os').networkInterfaces = () => ({}); }

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
        exclude: /node_modules/,
    },
    {
        test: /\.styl$/,
        loaders: ['style', 'css', 'postcss', 'stylus'],
    },
    {
        test: /\.(jpg|jpeg|png|svg)$/,
        loaders: ['file', 'image-webpack'],
    },
    {
        test: /\.json$/,
        loader: 'json',
    },
]

const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    }),
]

const plugins = [
    new HtmlWebpackPlugin({
        template: client + '/index.html',
    }),
    new CopyWebpackPlugin([
        { to: buildClient, from: res },
    ]),
    new webpack.DefinePlugin({
        NODE_ENV: process.env.NODE_ENV,
        SERVER_PORT: process.env.SERVER_PORT | 1969,
    }),
]
// Merge with production plugins if needed
.concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])

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
        client + '/main.jsx',
    ],
    output: {
        path: buildClient,
        filename: 'stroodle.[hash].js'
    },
    postcss: [ autoprefixer({ browsers }) ],
    module: { loaders },
    resolve,
    plugins,
    imageWebpackLoader: {
        mozjpeg: {
            quality: 65,
        },
        pngquant: {
            quality: "65-90",
            speed: 4,
        },
        svgo: {
            plugins: [
                { removeViewBox: false },
                { removeEmptyAttrs: false },
            ]
        }
    },
}

module.exports = [serverConfig, clientConfig]
