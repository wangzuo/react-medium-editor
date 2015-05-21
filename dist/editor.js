'use strict';

var React = require('react');
var MediumEditor = require('medium-editor');

module.exports = React.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      text: this.props.text
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    var dom = this.getDOMNode();
    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', function (e) {
      _this._updated = true;
      _this.change(dom.innerHTML);
    });
  },

  componentWillUnmount: function componentWillUnmount() {
    this.medium.destroy();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.state.text && !this._updated) {
      this.setState({ text: nextProps.text });
    }
  },

  render: function render() {
    return React.createElement('div', { className: this.props.className, contentEditable: 'true',
      dangerouslySetInnerHTML: { __html: this.state.text } });
  },

  change: function change(text) {
    if (this.props.onChange) this.props.onChange(text);
  }
});