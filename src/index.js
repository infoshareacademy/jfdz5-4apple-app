import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {Provider} from 'react-redux'
import firebase from 'firebase'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import App from './components/App';
import Auth from './components/Auth';
import registerServiceWorker from './registerServiceWorker';

const config = {
    apiKey: "AIzaSyBfMc_ewDjLN4mtSbeufm9IiKtIxg9peHM",
    authDomain: "react-app-e2827.firebaseapp.com",
    databaseURL: "https://react-app-e2827.firebaseio.com",
    projectId: "react-app-e2827",
    storageBucket: "react-app-e2827.appspot.com",
    messagingSenderId: "5478590020"
};
// firebase.initializeApp(config);


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
