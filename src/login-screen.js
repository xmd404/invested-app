import React from 'react';
import LoginFormContainer from './login-form-container.js';

let LoginScreen = (props) => 
    <div>
        <h1>Please log in below</h1>
        <LoginFormContainer props={props} />
    </div>

export default LoginScreen;