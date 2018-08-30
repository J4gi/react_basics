const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./js/zadanie03.js",
    output: {  path: path.join(__dirname, "./js/"), filename : 'out.js' },
    watch: true,
    module: {
        rules : [{
            test: /\.js$/,  exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] }
        }]
    }
};