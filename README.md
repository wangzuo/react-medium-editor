# react-medium-editor
React wrapper for [medium-editor](https://github.com/daviferreira/medium-editor)
### Demo
[http://wangzuo.github.io/react-medium-editor/example/](http://wangzuo.github.io/react-medium-editor/example/)
### Installation
``` sh
npm install react-medium-editor --save
```
### Usage
``` javascript
// load theme styles with webpack
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

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

  handleChange(text) {
    this.setState({text: text});
  }
});
```
### License
MIT
