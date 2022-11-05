const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.bundle-[hash].js"
    },
    mode: process.env.NODE_ENV || "development",
    plugins : [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: "index.html"
        })
    ],
    // Loaders
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use : [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    resolve: {
        extensions: [".jsx", "..."]
    }

}