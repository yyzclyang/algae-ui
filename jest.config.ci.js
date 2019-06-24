const baseConfig = require('./jest.config');

module.exports = Object.assign({}, baseConfig, {
  reporters: ['jest-junit'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov']
});
