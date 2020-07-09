const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      ROOT: path.resolve(__dirname)
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpeg|jpg|gif|ico)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [new HardSourceWebpackPlugin()]
};
