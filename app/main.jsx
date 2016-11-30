import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { createStore } form 'redux';
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

ReactDOM.render(
	<Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('content')
);
