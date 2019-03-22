import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/objectWithoutPropertiesLoose';
import _inheritsLoose from '@babel/runtime/helpers/inheritsLoose';
import React from 'react';
import ReactDOM from 'react-dom';

if (typeof document !== 'undefined') {
  var MediumEditor = require('medium-editor');
}

var ReactMediumEditor =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReactMediumEditor, _React$Component);

  function ReactMediumEditor(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      text: _this.props.text
    };
    return _this;
  }

  var _proto = ReactMediumEditor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var dom = ReactDOM.findDOMNode(this);
    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', function (e) {
      _this2._updated = true;

      _this2.change(dom.innerHTML);
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.medium.restoreSelection();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.medium.destroy();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.state.text && !this._updated) {
      this.setState({
        text: nextProps.text
      });
    }

    if (this._updated) this._updated = false;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        options = _this$props.options,
        text = _this$props.text,
        tag = _this$props.tag,
        contentEditable = _this$props.contentEditable,
        dangerouslySetInnerHTML = _this$props.dangerouslySetInnerHTML,
        props = _objectWithoutPropertiesLoose(_this$props, ["options", "text", "tag", "contentEditable", "dangerouslySetInnerHTML"]);

    props.dangerouslySetInnerHTML = {
      __html: this.state.text
    };

    if (this.medium) {
      this.medium.saveSelection();
    }

    return React.createElement(tag, props);
  };

  _proto.change = function change(text) {
    if (this.props.onChange) this.props.onChange(text, this.medium);
  };

  return ReactMediumEditor;
}(React.Component);

ReactMediumEditor.defaultProps = {
  tag: 'div'
};

export default ReactMediumEditor;
