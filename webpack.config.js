const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: "./src/polyfills.ts",
        main: "./src/app.ts"
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    node: {
        fs: 'empty'
      },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'src/dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
            },
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                loader: ["raw-loader", "sass-loader?sourceMap"]
            },
            {       
                test: /\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            },                              
            {
                test: /\.html$/,
                loader: "html-loader"
            }, 
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject : "body"
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true
    }
};