var React = require('react');
var MediumEditor = require('medium-editor');

module.exports = React.createClass({
  getInitialState() {
    return {
      text: this.props.text
    };
  },

  componentDidMount() {
    var dom = this.getDOMNode();
    this.medium = new MediumEditor(dom);
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
  },

  render() {
    return (
      <div className={this.props.className} contentEditable="true"
        dangerouslySetInnerHTML={{__html:this.state.text}}></div>
    );
  },

  change(text) {
    if(this.props.onChange) this.props.onChange(text);
  }
});
