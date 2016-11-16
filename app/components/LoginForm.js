'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'LoginForm',
    getInitialState: function getInitialState() {
        return {
            username: '',
            password: ''
        };
    },
    handleUsernameChange: function handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    },
    handlePasswordChange: function handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    },
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        var reg = /[a-zA-Z0-9]{6,}/;
        if (username == '') {
            $.toast('用户名不能为空');
            return false;
        } else if (password == '') {
            $.toast('密码不能为空');
            return false;
        } else if (!reg.test(password)) {
            $.toast('密码格式有误');
            return false;
        }
        this.props.onLoginSubmit({ username: username, password: password });
        this.setState({ username: '', password: '' });
    },
    render: function render() {
        return _react2.default.createElement(
            'form',
            { className: 'loginform', onSubmit: this.handleSubmit },
            _react2.default.createElement(
                'div',
                { className: 'list-block inset' },
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'item-content' },
                            _react2.default.createElement(
                                'div',
                                { className: 'item-inner' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'item-input' },
                                    _react2.default.createElement('input', { type: 'text', placeholder: '\u7528\u6237\u540D/\u90AE\u7BB1', name: 'username', value: this.state.username, onChange: this.handleUsernameChange })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'item-content' },
                            _react2.default.createElement(
                                'div',
                                { className: 'item-inner' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'item-input' },
                                    _react2.default.createElement('input', { type: 'password', placeholder: '\u5BC6\u7801', maxLength: '20', name: 'password', value: this.state.password, onChange: this.handlePasswordChange })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'button button-big button-fill button-full' },
                        '\u767B\u5F55'
                    )
                )
            )
        );
    }
});

//# sourceMappingURL=LoginForm.js.map