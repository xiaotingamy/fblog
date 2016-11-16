'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'LoginBox',
    handleLoginSubmit: function handleLoginSubmit(logindata) {
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            type: 'post',
            data: logindata,
            success: function (data) {
                $.toast('success');
            }.bind(this),
            error: function (xhr, status, err) {
                $.toast(err);
            }.bind(this)
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'page-group' },
            _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(_LoginForm2.default, { onLoginSubmit: this.handleLoginSubmit })
            )
        );
    }
});

//# sourceMappingURL=LoginBox.js.map