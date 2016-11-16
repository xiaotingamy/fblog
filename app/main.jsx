import React from 'react';
import ReactDOM from 'react-dom';
import LoginBox from './components/LoginBox';

ReactDOM.render(
    <LoginBox url='/token' />,
    document.getElementById('content')
);
