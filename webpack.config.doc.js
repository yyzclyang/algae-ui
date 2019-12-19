const path = require('path');
const baseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  entry: {
    index: './example/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    publicPath: 'http://cdn.yyzcl.cn/algae-ui'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'algae-ui',
      template: './example/index.html',
      filename: 'index.html',
      favicon: './example/img/favicon.ico'
    })
  ]
});
