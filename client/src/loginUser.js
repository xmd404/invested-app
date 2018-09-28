let loginUser = (props) => {
    fetch(`${process.env.REACT_APP_APIHOST}/userlogin`, {
        method: 'POST',
        body: JSON.stringify(props),
    })
    .then(response=> {
        return response.json()})
        .then(result=> {
            if (result === 'Wrong login information') {
                console.log(result);
            } else if (result === 'Wrong password') {
                console.log(result);
            } else {
                let userProfileInformation = result;
                localStorage.setItem("token", JSON.stringify(userProfileInformation.token));
                props.history.push('/');
                props.dispatch({type: 'SET_PROFILE_HEADER', userEmail: result.user.email, userName: result.user.username, userCash: result.user.cash, userPortfolioValue: result.user.portfolioquantity})
            }
        })
}

export default loginUser;