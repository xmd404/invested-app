import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router from './router.js'

let app = 
    <Provider>
        <Router />
    </Provider>

ReactDOM.render(app, document.getElementById('root'));
