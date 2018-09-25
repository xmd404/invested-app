import React from 'react';
import SignupFormContainer from './signup-form-container';

let SignupScreen = (props) => 
    <div>
        <h1>Create an Account</h1>
        <SignupFormContainer props={props} />
    </div>

export default SignupScreen;