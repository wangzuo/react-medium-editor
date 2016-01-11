var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    'example/bundle': './example/index.js',
    'example/styles-bundle': './example/styles.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/builds',
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
