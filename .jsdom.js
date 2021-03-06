require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((prop) => {
  if (typeof global[prop] === 'undefined') {
    exposedProperties.push(prop);
    global[prop]  = document.defaultView[prop];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
