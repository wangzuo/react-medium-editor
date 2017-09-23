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

    this.text = this.props.text;
  }

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);

    this.medium = new MediumEditor(dom, this.props.options);
    this.medium.subscribe('editableInput', (e) => {
      this._updated = true;
      this.text = dom.innerHTML;
      this.change(dom.innerHTML);
    });
  }

  componentWillUnmount() {
    this.medium.destroy();
  }

  shouldComponentUpdate(nextProps) {
    //inside update: received old text
    if (this._updated && nextProps.text != this.text)
      return false;

    //ignore same text
    if (nextProps.text == this.text) {
      this._updated = false;
      return false;
    }

    //outside update
    this.text = nextProps.text;
    return true;
  }


  render() {
    const tag = this.props.tag;
    const props = blacklist(this.props, 'options', 'text', 'tag', 'contentEditable', 'dangerouslySetInnerHTML');

    assign(props, {
      dangerouslySetInnerHTML: { __html: this.text }
    });

    return React.createElement(tag, props);
  }

  change(text) {
    if (this.props.onChange) this.props.onChange(text, this.medium);
  }
}
