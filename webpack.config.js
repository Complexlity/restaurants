const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    mode: 'development',
    entry: {
        bundle:path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename:'[name][ext]',
        clean:true,
    },
    devtool: 'source-map',
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
        new BundleAnalyzerPlugin(),
    ],
}

