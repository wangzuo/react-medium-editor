import React from 'react';
import Editor from '../lib/editor';

module.exports = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      text: 'Etiam Fringilla Magna Quam'
    };
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

        <h3>Editor #3 (editing disabled)</h3>
        <p>Useful for using the toolbar with customized buttons/actions</p>
        <Editor
          style={{ outline: 'dotted 1px', padding: 10 }}
          text={this.state.text}
          options={{disableEditing: true, toolbar: false }}
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
