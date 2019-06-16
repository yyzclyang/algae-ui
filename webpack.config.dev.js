const baseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  entry: {
    example: './example/index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'algae-ui',
      template: './example/index.html'
    })
  ]
});
