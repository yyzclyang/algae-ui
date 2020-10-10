const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: { hot: 'react-hot-loader/patch', example: './site/index.tsx' },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'algae-ui',
      template: './site/index.html'
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'algae-ui': path.resolve(__dirname, '../components')
    }
  }
});
