import React from 'react';
import LoginForm from './login-form.js';
import { connect } from 'react-redux';

let LoginScreen = (props) => 
    <div>
        <h1 className="login-header">Please log in below</h1>
        <LoginForm 
            {...props}
        />
    </div>

let ConnectedLoginScreen = connect(state=> {
    console.log(state);
    return {
        loginEmailInput: state.loginEmailInput,
        loginPasswordInput: state.loginPasswordInput,
        userName: state.userName,
        userCash: state.userCash,
        userPortfolioValue: state.userPortfolioValue,
    }
})(LoginScreen);

export default ConnectedLoginScreen;