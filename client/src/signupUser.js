import loginUser from './loginUser';

let signupUser = (props) => {
    fetch('http://localhost:3001/usersignup', {
        method: 'POST',
        body: JSON.stringify(props),
    })
    .then(data=> {
        console.log(data);
        return data.text()})
        .then(content=> {
            loginUser(props);
        })
}

export default signupUser;