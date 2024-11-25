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
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[hash].[ext]',
                      outputPath: 'assets/images/', // Output directory for images
                    },
                  },
                ],
              }
        ]
    }
};