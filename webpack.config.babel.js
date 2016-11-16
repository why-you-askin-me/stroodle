import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import webpack from 'webpack'
import path from 'path'

const build = path.resolve(__dirname, 'build')
const src = path.resolve(__dirname, 'src/client/')
const res = path.resolve(__dirname, 'res')

module.exports = {
    entry: src + '/main.jsx',
    output: {
        path: build,
        filename: 'stroodle.[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html',
        }),
        new CopyWebpackPlugin([
            { to: build, from: res }
        ]),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel'
            },
            {
                test: /\.styl/,
                loaders: ['style', 'postcss', 'css', 'stylus']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl']
    },
}
