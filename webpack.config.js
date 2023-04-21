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
            test: /.css/,
            use: ['style-loader','css-loader']
        }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,"client/public/index.html")
    })
  ]
}