const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const uglify = require("uglifyjs-webpack-plugin"); 
module.exports = {
    entry:{
        main:"./src/main.js"
    },
    output:{
        path:path.join(__dirname, "dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            
                {
                    test:/\.js$/,
                    use:"babel-loader"
                },
                {  
                    test: /\.vue$/,  
                    loader: 'vue-loader'  
                },  
                {  
                    test: /\.less$/,  
                    use: [  
                        { loader: "style-loader" },  
                        { loader: "css-loader" },  
                        { loader: "less-loader" }  
                    ]  
                }, 
                {  
                    test: /\.css$/,  
                    use: [  
                        { loader: "style-loader" },  
                        { loader: "css-loader" } 
                    ]  
                },
                {  
                    test: /\.js$/,  
                    exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,  
                    loader: 'babel-loader'  
                },  
                {  
                    test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,  
                    loader: 'url-loader',  
                    query: {  
                        limit: 10000,  //小于3000000使用base64编码
                        name: '[name].[ext]?[hash]' 
                    }  
                }  
        ]
    },
    plugins:[
        new webpack.DefinePlugin({  
            "process.env": {  
                NODE_ENV: JSON.stringify("production")  
            }  
        }),
        new HtmlWebpackPlugin({
            title:"hello world",
            path:path.join(__dirname, "dist"),
            filename: "index.html",
            template: 'index.html',
            inject: true
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }

    
}