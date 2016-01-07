var ReactDOMServer = require('react-dom/server');
var Editor = require('../lib/editor');

ReactDOMServer.renderToString(<Editor text="hello world"/>);
