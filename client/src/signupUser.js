import loginUser from './loginUser';

let signupUser = (props) => {
    fetch(`${process.env.REACT_APP_APIHOST}/usersignup`, {
        method: 'POST',
        body: JSON.stringify(props),
    })
    .then(data=> {
        return data.text()})
        .then(content=> {
            let loginCredentials = {
                ...props,
                loginEmailInput: props.signupEmailInput,
                loginPasswordInput: props.signupPasswordInput
            }
            loginUser(loginCredentials);
        })
}

export default signupUser;