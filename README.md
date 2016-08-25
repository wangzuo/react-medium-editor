# react-medium-editor
React wrapper for [medium-editor](https://github.com/daviferreira/medium-editor)

For better rich text editing with react, check [draft-js](http://draftjs.org/).

### Demo
[http://wangzuo.github.io/react-medium-editor](http://wangzuo.github.io/react-medium-editor)
### Installation
``` sh
npm install react-medium-editor --save
```
### Usage
``` javascript
// load theme styles with webpack
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

// ES module
import Editor from 'react-medium-editor';

// CommonJS enviroment
// var Editor = require('react-medium-editor').default;

var App = React.createClass({
  getInitialState() {
    return { text: 'Fusce dapibus, tellus ac cursus commodo' };
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

  handleChange(text, medium) {
    this.setState({text: text});
  }
});
```
### License
MIT
