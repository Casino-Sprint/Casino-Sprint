const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry:'./client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
           test: /\.jsx?/,
           exclude: /node_modules/,
           use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ]
            }
           } 
        },
        {
            test: /.css$/i,
            use: [
              'style-loader',
              'css-loader'
            ]
        }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,"client/public/index.html")
    }),
  ],
  devServer: {
    // static: {
    //   directory: path.resolve(__dirname, 'dist'),
    //   publicPath: '/build'
    // },
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}