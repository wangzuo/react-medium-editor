'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof document !== 'undefined') {
  var MediumEditor = require('medium-editor');
}

var ReactMediumEditor = function (_React$Component) {
  _inherits(ReactMediumEditor, _React$Component);

  function ReactMediumEditor(props) {
    _classCallCheck(this, ReactMediumEditor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactMediumEditor).call(this, props));

    _this.state = {
      text: _this.props.text
    };
    return _this;
  }

  _createClass(ReactMediumEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var dom = _reactDom2.default.findDOMNode(this);

      this.medium = new MediumEditor(dom, this.props.options);
      this.medium.subscribe('editableInput', function (e) {
        _this2._updated = true;
        _this2.change(dom.innerHTML);
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.medium.restoreSelection();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.medium.destroy();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.text !== this.state.text && !this._updated) {
        this.setState({ text: nextProps.text });
      }

      if (this._updated) this._updated = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var tag = this.props.tag;
      var props = (0, _blacklist2.default)(this.props, 'options', 'text', 'tag', 'contentEditable', 'dangerouslySetInnerHTML');

      (0, _objectAssign2.default)(props, {
        dangerouslySetInnerHTML: { __html: this.state.text }
      });

      if (this.medium) {
        this.medium.saveSelection();
      }

      return _react2.default.createElement(tag, props);
    }
  }, {
    key: 'change',
    value: function change(text) {
      if (this.props.onChange) this.props.onChange(text, this.medium);
    }
  }]);

  return ReactMediumEditor;
}(_react2.default.Component);

ReactMediumEditor.defaultProps = {
  tag: 'div'
};
exports.default = ReactMediumEditor;