import React from 'react';
import UserAuthenticationInput from './user-authentication-input.js';

let LoginForm = (props) =>
    <form
        className="login-form"
        onSubmit={ (event) => {
            event.preventDefault();
            fetch('/userlogin', {
                method: 'POST',
                body: JSON.stringify(props),
                headers: { 'Content-Type': 'application/json'}
            })
            .then(data=> {
                return data.text();
            })
            .then(result=> {
                console.log(result);
                if (result === 'Wrong login information') {
                    console.log(result);
                } else if (result === 'Wrong password') {
                    console.log(result);
                } else {
                    localStorage.setItem("token", JSON.stringify(result));

                }
            })
        }}>
        <UserAuthenticationInput className="email" placeHolder="Email" type="email" stateName='email' stateFunction={props.captureUserEmail} />
        <UserAuthenticationInput className="password" placeHolder="Password" type="password" stateName='password' stateFunction={props.captureUserPassword} />
        <input type="submit" value="Continue"></input>
    </form>

export default LoginForm;