const path = require("path");
const htmlWebpackPlugin =  require("html-webpack-plugin")


module.exports = {

    output:{
        path:path.join(__dirname,"/dist"),  // the bundle output path
        filename: "bundle.js", // the name of the bundle
    },
    plugins: [
        new htmlWebpackPlugin({
            template:"src/index.html", // to import index.html file inside index.js
        }),
    ],
    devServer:{
        port: 5000 // we can change this
    },
    module:{
        rules:[
         {
            test: /\.(js|jsx)$/,         // .js and jsx files
            exclude:  /node_modules/,    // excluding the node module
            use:{
                loader:"babel-loader",
            },
         },
         {
            test: /\.(sa|sc|c)ss$/,        // style files
            use: ["style-loader","css-loader","sass-loader"],
         },
         {
            test: /\.(png|woff|woff2|ttf|eot|svg)$/, // to import images and fonts
            loader:"url-loader",
            options: { limit: false },
         },
        ]
    }
}