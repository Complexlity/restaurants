const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle:path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename:'[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|webp|svg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Complex Restaurant',
            filename: 'index.html',
            template:'src/template.html',
        }),
    ],
}

