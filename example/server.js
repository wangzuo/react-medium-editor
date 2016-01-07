var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Editor = require('../lib/editor');

var html = ReactDOMServer.renderToString(<Editor text="hello world"/>);
console.log(html);
