import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';
import loginUser from './loginUser.js';

let SignupForm = (props) => {
    return <form
        className="signup-form"
        onSubmit={ (event) => {
            event.preventDefault();
            fetch('/usersignup', {
                method: 'POST',
                body: JSON.stringify(props),
                headers: { 'Content-Type': 'application/json'} 
            })
            .then(data=> {
                return data.json();
            })
            .then(content=> {
                loginUser(props);
            })
        }}>
        {/* <input 
            onChange={ (event) => {
                let value = event.target.value;
                console.log(value);
                props.captureUserName(event.target.value);
            } }
            type="text"
            value={props.userName}
                // props.addNewPost(event.target.value);
        ></input> */}
        <UserAuthenticationInput 
            props={props} 
            className="full-name" 
            placeHolder="Full Name" 
            type="text" 
            stateName={props.userName} 
            stateFunction={props.captureUserName} 
            inputClassName="signup-input"
        />
        <UserAuthenticationInput 
            props={props} 
            className="email" 
            placeHolder="Email" 
            type="email" 
            stateName={props.email} 
            stateFunction={props.captureUserEmail} 
            inputClassName="signup-input"
        />
        <UserAuthenticationInput 
            props={props} 
            className="password" 
            placeHolder="Password" 
            type="password" 
            stateName={props.password} 
            stateFunction={props.captureUserPassword} 
            inputClassName="signup-input"
        />
        {/* <UserAuthenticationInput props={props} className="confirm-password" placeHolder="Confirm Password" type="password" /> */}
        <input type="submit" value="Continue" className="login-submit-button" ></input>
    </form>
};

export default SignupForm;