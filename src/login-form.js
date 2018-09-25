import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';
import loginUser from './loginUser.js';

let LoginForm = (props) => {
    return <form
        className="login-form"
        onSubmit={ (event) => {
            event.preventDefault();
            props.clearUserEmail();
            loginUser(props);
        }}>
        <UserAuthenticationInput 
            className="email" 
            placeHolder="Email" 
            type="email" 
            stateName={props.email} 
            stateFunction={props.captureUserEmail}
            inputClassName="login-input" 
        />
        <UserAuthenticationInput 
            className="password" 
            placeHolder="Password" 
            type="password" 
            stateName={props.password} 
            stateFunction={props.captureUserPassword} 
            inputClassName="login-input" 
        />
        <input type="submit" value="Continue" className="login-submit-button" ></input>
    </form>
};

export default LoginForm;