var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: './src/bootstrap/main.js',
    vendor: ['vue']
  },
  dist: './dist',
  template: './src/index.tpl',
  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: 'vendor',
  publicPath: '/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint', 'sass']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
