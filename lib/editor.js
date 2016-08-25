import assign from 'object-assign';
import blacklist from 'blacklist';
import React from 'react';
import ReactDOM from 'react-dom';

if (typeof document !== 'undefined') {
  var MediumEditor = require('medium-editor');
}

export default class ReactMediumEditor extends React.Component {
  static defaultProps = {
    tag: 'div'
  };

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };
  }

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);

    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', (e) => {
      this._updated = true;
      this.change(dom.innerHTML);
    });
  }

  componentDidUpdate() {
    this.medium.restoreSelection();
  }

  componentWillUnmount() {
    this.medium.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.state.text && !this._updated) {
      this.setState({ text: nextProps.text });
    }

    if (this._updated) this._updated = false;
  }

  render() {
    const tag = this.props.tag;
    const props = blacklist(this.props, 'options', 'text', 'tag', 'contentEditable', 'dangerouslySetInnerHTML');

    assign(props, {
      dangerouslySetInnerHTML: { __html: this.state.text }
    });

    if (this.medium) {
      this.medium.saveSelection();
    }

    return React.createElement(tag, props);
  }

  change(text) {
    if (this.props.onChange) this.props.onChange(text, this.medium);
  }
}
