var path = require('path');

var config = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.ts']
    },
    node: {
        fs: 'empty'
      },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ["raw-loader", "sass-loader?sourceMap"]
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            },                          
            {
                test: /\.html$/,
                loader: "html-loader"
            }, 
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}

module.exports = config;