import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';

let SignupForm = (props) => {
    console.log(props);
    return <form
        className="signup-form"
        onSubmit={ (event) => {
            event.preventDefault();
            console.log(event.target.value);
            console.log(props);
            fetch('/usersignup', {
                // .then(data=> {
                //     return data.text()
                // })
                // .then(item=> {
                //     console.log(item);
                // })
                method: 'POST',
                body: JSON.stringify(props)
            })
            .then(data=> {
                return data.json();
            })
            .then(content=> {
                console.log(content);
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
        <UserAuthenticationInput props={props} className="full-name" placeHolder="Full Name" type="text" stateName="userName" stateFunction={props.captureUserName} />
        <UserAuthenticationInput props={props} className="email" placeHolder="Email" type="email" stateName="email" stateFunction={props.captureUserEmail} />
        <UserAuthenticationInput props={props} className="password" placeHolder="Password" type="password" stateName="password" stateFunction={props.captureUserPassword} />
        {/* <UserAuthenticationInput props={props} className="confirm-password" placeHolder="Confirm Password" type="password" /> */}
        <input type="submit" value="Continue"></input>
    </form>
};

export default SignupForm;