import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import App from './components/App';
import Auth from './components/Auth';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Auth>
                <App />
            </Auth>
        </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
