const getBabelConfig = (isESM) => ({
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: isESM ? false : undefined,
        targets: {
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 9',
            'iOS >= 8',
            'Android >= 4'
          ]
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ]
});

const getTSConfig = (isESM) => {
  const tsConfig = require('../tsconfig.json');

  const module = isESM ? 'es6' : 'commonjs';

  return Object.assign(
    {
      module,
      declaration: true,
      noUnusedParameters: true,
      noUnusedLocals: true,
      strictNullChecks: true,
      target: 'es5',
      jsx: 'preserve',
      moduleResolution: 'node',
      allowSyntheticDefaultImports: true
    },
    tsConfig.compilerOptions
  );
};

module.exports = {
  getBabelConfig,
  getTSConfig
};
