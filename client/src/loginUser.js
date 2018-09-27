let loginUser = (props) => {
    fetch(`${process.env.REACT_APP_APIHOST}/userlogin`, {
        method: 'POST',
        body: JSON.stringify(props),
    })
    .then(response=> {
        return response.text()})
        .then(result=> {
            if (result === 'Wrong login information') {
                console.log(result);
            } else if (result === 'Wrong password') {
                console.log(result);
            } else {
                localStorage.setItem("token", JSON.stringify(result));
                props.history.push('/');
            }
        })
}

export default loginUser;