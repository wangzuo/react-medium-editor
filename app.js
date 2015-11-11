require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
require('./app.css');

var React = require('react');
var ReactDOM = require('react-dom');
var Editor = require('../lib/editor');

var App = React.createClass({
  getInitialState() {
    return {text: 'Fusce dapibus, tellus ac cursus commodo'}
  },

  render() {
    return (
      <div className="app">
        <h1>react-medium-editor</h1>
        <h3>Html content</h3>
        <div>{this.state.text}</div>

        <h3>Editor #1 (&lt;pre&gt; tag)</h3>
        <Editor
          tag="pre"
          className="editor"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          text={this.state.text}
          onChange={this.handleChange}
          options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
        />
        <h3>Editor #2</h3>
        <Editor
          text={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  },

  handleFocus() {
    console.log('onFocus');
  },

  handleBlur() {
    console.log('onBlur');
  },

  handleChange(text, medium) {
    this.setState({
      text: text
    });

    console.log('medium', medium);
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
