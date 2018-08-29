const path = require('path');

module.exports = {
    entry: 'js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'out.js'
    },
    mode: "development",
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env", {
                            targets:
                                {browsers : ['>1%']}
                        }], "react"]
                    }
                }
            }
        ],
    },
};