import React from 'react';
import SignupForm from './signup-form';
import { connect } from 'react-redux';

let SignupScreen = (props) => 
    <div>
        <h1 className="signup-header" >Create an Account</h1>
        <SignupForm {...props} />
        <p className="signup-terms-of-service">By creating an account you agree to our Terms of Service and Privacy Policy</p>
    </div>

let ConnectedSignupScreen = connect (state=> {
    return {
        signupNameInput: state.signupNameInput,
        signupEmailInput: state.signupEmailInput,
        signupPasswordInput: state.signupPasswordInput,
    }
})(SignupScreen);

export default ConnectedSignupScreen;