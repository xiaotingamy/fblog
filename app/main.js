'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _LoginBox = require('./components/LoginBox');

var _LoginBox2 = _interopRequireDefault(_LoginBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_LoginBox2.default, { url: '/token' }), document.getElementById('content'));

//# sourceMappingURL=main.js.map