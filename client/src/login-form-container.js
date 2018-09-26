import React from 'react';
import LoginForm from './login-form';

class LoginFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {

        let captureUserEmail = (value) => 
            this.setState({email: value})

        let captureUserPassword = (value) => 
            this.setState({password: value})

        let clearUserEmail = () =>
            this.setState({email: '', password: ''})

        return <LoginForm 
            {...this.state}
            {...this.props}
            captureUserEmail={captureUserEmail}
            captureUserPassword={captureUserPassword}
            clearUserEmail={clearUserEmail}
        />
    }
}

export default LoginFormContainer;