import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router.js'

let App = 
    <Provider>
        <Router />
    </Provider>

ReactDOM.render(App, document.getElementById('root'));