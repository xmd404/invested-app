import React from 'react';
import SignupFormContainer from './signup-form-container';

let SignupScreen = (props) => 
    <div>
        <h1>Create an Account</h1>
        <SignupFormContainer props={props} />
        <p>By creating an account you agree to our Terms of Service and Privacy Policy</p>
    </div>

export default SignupScreen;