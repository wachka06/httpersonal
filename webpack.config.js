const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: process.env.NODE_ENV,
  plugins: [new MiniCssExtractPlugin()],
  module: {
      rules: [
          {
              test: /\.jsx?/,
              exclude: /(node_module)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
          },
          {
              test: /\.(sa|sc|c)ss$/,
              use: [
                  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
              ]
          },
          {
               test: /\.(png|svg|jpg|jpeg|gif)$/i,
               type: 'asset/resource',
          }
      ]
  },
  devServer: {
      hot: true,
      publicPath: '/build/',
      // port: 8080,
      proxy: {
        'api/*': 'http://localhost:3000',
        // 'api/status_code': 'http://localhost:3000',
        '/': 'http://localhost:3000',
      }
  },
};