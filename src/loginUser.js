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