import React from 'react';
import SignupForm from './signup-form';

class SignupFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''
        };
    }
    render() {

        let captureUserName = (value) => 
            this.setState({userName: value})

        let captureUserEmail = (value) => 
            this.setState({email: value})

        let captureUserPassword = (value) => 
            this.setState({password: value})

        console.log(this.state);

        return <SignupForm 
            {...this.state}
            {...this.props}
            captureUserName={captureUserName}
            captureUserEmail={captureUserEmail}
            captureUserPassword={captureUserPassword}
        />
    }
}

export default SignupFormContainer;