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
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
            },                              
            {
                test: /\.html$/,
                loader: "html-loader"
            }, 
        ]
    },
}

module.exports = config;