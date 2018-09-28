import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';
import loginUser from './loginUser.js';
import clearUserInput from './clearUserInput';
import setUsername from './setUsername.js';

let LoginForm = (props) => {
    console.log(props);
    return <form
        props={props}
        className="login-form"
        onSubmit={ (event) => {
            event.preventDefault();
            loginUser(props);
            setUsername(props);
            clearUserInput(props, 'LOGIN');
        }}>
        <UserAuthenticationInput 
            className="email" 
            placeHolder="Email" 
            type="email" 
            stateName="loginEmailInput" 
            inputClassName="login-input" 
            stateInput={props.loginEmailInput}
            {...props}
        />
        <UserAuthenticationInput 
            className="password" 
            placeHolder="Password" 
            type="password" 
            stateName="loginPasswordInput"
            stateInput={props.loginPasswordInput} 
            inputClassName="login-input" 
            {...props}
        />
        <input type="submit" value="Continue" className="login-submit-button" ></input>
    </form>
};

export default LoginForm;