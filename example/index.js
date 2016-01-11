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
    <script src="./styles.js"></script>
    <title>react-medium-editor</title>
  </head>
  <body>
    <a href="https://github.com/wangzuo/react-medium-editor"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
    <div id="app">${html}</div>
    <script src="./bundle.js"></script>
  </body>
</html>`);
};
