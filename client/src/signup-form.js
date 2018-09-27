import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';
import loginUser from './loginUser.js';
import signupUser from './signupUser';
import clearUserInput from './clearUserInput';

let SignupForm = (props) => {
    return <form
        className="signup-form"
        onSubmit={ (event) => {
            event.preventDefault();
            signupUser(props);
            clearUserInput(props, 'SIGNUP');
        }}>
        <UserAuthenticationInput 
            {...props} 
            className="full-name" 
            placeHolder="Full Name" 
            type="text" 
            stateName="signupNameInput" 
            stateInput={props.signupNameInput}
            inputClassName="signup-input"
        />
        <UserAuthenticationInput 
            {...props} 
            className="email" 
            placeHolder="Email" 
            type="email" 
            stateName="signupEmailInput" 
            stateInput={props.signupEmailInput}
            inputClassName="signup-input"
        />
        <UserAuthenticationInput 
            {...props} 
            className="password" 
            placeHolder="Password" 
            type="password" 
            stateName="signupPasswordInput"
            stateInput={props.signupPasswordInput}
            inputClassName="signup-input"
        />
        {/* <UserAuthenticationInput props={props} className="confirm-password" placeHolder="Confirm Password" type="password" /> */}
        <input type="submit" value="Continue" className="login-submit-button" ></input>
    </form>
};

export default SignupForm;