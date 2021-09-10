const path = require('path');

module.exports = {
    entry: './src/js/script.js',
    output: {
        publicPath: '/dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        static: {
            directory: path.join(__dirname)
        },
        compress: true,
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
