const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    },
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Add this rule for CSS files
            },
            {
              test: /\.json$/,
              type: 'asset/source', // This handles JSON files, importing them as a string
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};