const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: { hot: 'react-hot-loader/patch', example: './example/index.tsx' },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'algae-ui',
      template: './example/index.html'
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
});
