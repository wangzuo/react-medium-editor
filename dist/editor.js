'use strict';

var assign = require('object-assign');
var blacklist = require('blacklist');
var React = require('react');
var ReactDOM = require('react-dom');
var MediumEditor = require('medium-editor');

module.exports = React.createClass({
  displayName: 'MediumEditor',

  getInitialState: function getInitialState() {
    return {
      text: this.props.text
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      tag: 'div'
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var dom = ReactDOM.findDOMNode(this);
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

    if (this._updated) this._updated = false;
  },
  render: function render() {
    var tag = this.props.tag;
    var props = blacklist(this.props, 'tag', 'contentEditable', 'dangerouslySetInnerHTML');

    assign(props, {
      contentEditable: true,
      dangerouslySetInnerHTML: { __html: this.state.text }
    });

    return React.createElement(tag, props);
  },
  change: function change(text) {
    if (this.props.onChange) this.props.onChange(text, this.medium);
  }
});

module.exports.MediumEditor = MediumEditor;