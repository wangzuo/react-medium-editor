var assign = require('object-assign');
var blacklist = require('blacklist');
var React = require('react');
var ReactDOM = require('react-dom');

if(typeof document !== 'undefined') {
  var MediumEditor = require('medium-editor');
}

module.exports = React.createClass({
  displayName: 'MediumEditor',

  getInitialState() {
    return {
      text: this.props.text
    };
  },

  getDefaultProps() {
    return {
      tag: 'div'
    };
  },

  componentDidMount() {
    var dom = ReactDOM.findDOMNode(this);

    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', (e) => {
      this._updated = true;
      this.change(dom.innerHTML);
    });
  },

  componentWillUnmount() {
    this.medium.destroy();
  },

  componentWillReceiveProps(nextProps) {
    if(nextProps.text !== this.state.text && !this._updated) {
      this.setState({text: nextProps.text});
    }

    if(this._updated) this._updated = false;
  },

  render() {
    var tag = this.props.tag;
    var props = blacklist(this.props, 'tag', 'contentEditable', 'dangerouslySetInnerHTML');

    assign(props, {
      contentEditable: true,
      dangerouslySetInnerHTML: {__html: this.state.text}
    });

    return React.createElement(tag, props);
  },

  change(text) {
    if(this.props.onChange) this.props.onChange(text, this.medium);
  }
});
