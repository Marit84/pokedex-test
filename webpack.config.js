const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer:{
        publicPath: '/',
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 3000,
    },
    devtool: 'inline-source-map' //sikrer at feilmeldingene i consollen peker til riktig plass
};