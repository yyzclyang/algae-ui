const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './index.ts'
  },
  output: {
    filename: `index.js`,
    path: path.resolve(__dirname, '../dist'),
    library: 'algae-ui',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `index.css`,
      chunkFilename: '[id].css'
    })
  ]
});
