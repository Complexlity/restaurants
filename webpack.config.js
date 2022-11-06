const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        bundle:path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // clean:true, 
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
    }
}

