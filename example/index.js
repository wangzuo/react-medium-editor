require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
require('./app.css');

var ReactDOM = require('react-dom');
var App = require('./app');

ReactDOM.render(<App/>, document.getElementById('app'));
