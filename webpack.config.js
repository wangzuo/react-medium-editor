var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    'dist/editor': './lib/index',
    'example/bundle': './example/index.js',
    'example/styles-bundle': './example/styles.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('example/bundle', ['/'])
  ]
};
