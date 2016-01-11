require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
require('./app.css');

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
    <title>react-medium-editor</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script src="https://fb.me/react-0.14.0.js"></script>
    <script src="https://fb.me/react-dom-0.14.0.js"></script>
    <script src="http://localhost:8899/example/bundle.js"></script>
  </body>
</html>`);
};
