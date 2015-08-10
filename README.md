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
var App = React.createClass({
  getInitialState() {
    return {
      text: 'Fusce dapibus, tellus ac cursus commodo'
    };
  },

  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <Editor
          tag="h1"
          text={this.state.text}
          onChange={this.handleChange}
          options={{buttons: ['bold', 'italic', 'underline']}}
        />
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
