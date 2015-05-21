require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
var React = require('react');
var Editor = require('../lib/editor');

var text = 'Fusce dapibus, tellus ac cursus commodo';
var handleChange = function(text) {
  console.log(text);
};

React.render(
  <Editor text={text}
    onChange={handleChange}
    options={{buttons: ['bold', 'italic', 'underline']}}/>, document.body);
