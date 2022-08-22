 
const { VueLoaderPlugin } = require('vue-loader')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//  const devMode = process.env.NODE_ENV ! =='production'
 const path =require('path')
 module.exports={
     mode:'production',
     entry:'./src/main.js',
     output:{
         path:path.join(__dirname,'bundle'),
         filename:'bundle.js',
         clean:true
     },
     module: { 
        rules: [
         {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
          {
            test: /\.css$/,
            use: [ "style-loader", "css-loader"]
          },
          {
            test: /\.less$/,
            use: [ "style-loader", "css-loader", 'less-loader']
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/i,
            type: 'asset/resource',
            generator:{
              filename:'images/[name]-[hash:6][ext]'
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
        
    },
     plugins: [
      new MiniCssExtractPlugin({
        linkType: "text/css",
      }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new VueLoaderPlugin()
        
    ],
    devServer: {
        port: 30000, // 端口号
        open: true
      }
 }