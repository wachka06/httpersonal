const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: process.env.NODE_ENV,
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
                  'style-loader',
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
    //   port: 8080,
      proxy: {
        'api/*': 'http://localhost:3000',
        // 'api/status_code': 'http://localhost:3000',
        '/': 'http://localhost:3000',
      }
  },
};