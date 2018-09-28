import React from 'react';
import LoginForm from './login-form.js';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

let LoginScreen = (props) => 
    <div>
        <h1 className="login-header">Please log in below</h1>
        <div className="login-screen">
            <LoginForm 
                {...props}
            />
            <NavLink to="/signup"><a className="go-to-signup-btn">Create Account</a></NavLink>
        </div>
    </div>

let ConnectedLoginScreen = connect(state=> {
    // console.log(state);
    return {
        loginEmailInput: state.loginEmailInput,
        loginPasswordInput: state.loginPasswordInput,
        userName: state.userName,
        userCash: state.userCash,
        userPortfolioValue: state.userPortfolioValue,
    }
})(LoginScreen);

export default ConnectedLoginScreen;