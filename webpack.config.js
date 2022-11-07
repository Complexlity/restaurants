const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        bundle:path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename:'[name][ext]',
        clean:true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|webp|svg|gif|ico)$/i,
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
            favicon: "./src/assets/favicon.ico"
        }),
    ],
}

