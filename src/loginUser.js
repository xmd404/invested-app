import { Redirect } from 'react-router-dom';
import React from 'react';

let loginUser = (props) => {
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
        console.log('19');
        console.log(props);
        if (result === 'Wrong login information') {
            console.log(result);
        } else if (result === 'Wrong password') {
            console.log(result);
        } else {
            localStorage.setItem("token", JSON.stringify(result));
            props.props.history.push('/');
        }
    })
}

export default loginUser;