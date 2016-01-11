var http = require('http');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./app');

var html = ReactDOMServer.renderToString(<App/>);
var server = http.createServer((req, res) => {
  res.end(`<html>
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
});

server.listen(9999, () => {
  console.log('server listening on 9999');
});
