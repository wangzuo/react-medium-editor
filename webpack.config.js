var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    'bundle': './example/index.js',
    'styles': './example/styles.js'
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
    new StaticSiteGeneratorPlugin('bundle', ['/'])
  ]
};
