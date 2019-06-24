const baseConfig = require('./webpack.config');
const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  plugins: [
    new DtsBundleWebpack({
      name: 'algae-ui',
      main: 'lib/src/index.d.ts',
      out: '../index.d.ts',
      removeSource: true,
      outputAsModuleFolder: true
    })
  ]
});