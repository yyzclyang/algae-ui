const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: 'algae-ui',
    libraryTarget: 'umd'
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
  }
});
