const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                harrypotter: 'harrypotter@http://localhost:8081/remoteEntry.js',
                rickandmorty: 'rickandmorty@http://localhost:8082/remoteEntry.js',
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig);