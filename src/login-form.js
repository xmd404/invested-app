import React from 'react';
import LoginInput from './login-input.js';

let loginForm = () =>
    <form
        className="login-form"
        onSubmit={ (event) => {
            // event.preventDefault();
            // fetch('', {

            // })
        }}>
        <LoginInput className="full-name" placeHolder="Full Name" />
        <LoginInput className="email" placeHolder="Email" />
        <LoginInput className="password" placeHolder="Password" />
        <LoginInput className="confirm-password" placeHolder="Confirm Password" />
        <input type="submit" value="Continue"></input>
    </form>

export default loginForm;