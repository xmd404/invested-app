import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';

let SignupForm = () =>
    <form
        className="login-form"
        onSubmit={ (event) => {
            event.preventDefault();
            fetch('/', {

            })
        }}>
        <UserAuthenticationInput className="full-name" placeHolder="Full Name" />
        <UserAuthenticationInput className="email" placeHolder="Email" />
        <UserAuthenticationInput className="password" placeHolder="Password" />
        <UserAuthenticationInput className="confirm-password" placeHolder="Confirm Password" />
        <input type="submit" value="Continue"></input>
    </form>

export default SignupForm;