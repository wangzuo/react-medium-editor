var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var App = require('./app');

if(typeof document !== 'undefined') {
  ReactDOM.render(<App/>, document.getElementById('app'));
}

module.exports = function(locals, cb) {
  var html = ReactDOMServer.renderToString(<App/>);

  cb(null, `<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
    <script src="/example/styles-bundle.js"></script>
    <title>react-medium-editor</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script src="/example/bundle.js"></script>
  </body>
</html>`);
};
