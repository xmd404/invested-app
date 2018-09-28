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
                console.log(result);
                console.log(result.user);
                let userProfileInformation = result;
                localStorage.setItem("token", JSON.stringify(userProfileInformation.token));
                // let updatedUserPortfolioValue = (props, userProfileInformation) => {
                //     console.log(props);
                //     console.log(userProfileInformation);
                //     if (result.user.portfolioquantity === null) {
                //         return 0;
                //     } else {
                //         return result.user.portfolioquantity * props.stockPrice;
                //     }
                // }
                props.dispatch({type: 'SET_PROFILE_HEADER', userEmail: result.user.email, userName: result.user.username, userCash: result.user.cash, portfolioQuantity: result.user.portfolioquantity, userPortfolioValue: (result.user.portfolioquantity * props.stockPrice)})
                props.history.push('/profile');

            }
        })
}

export default loginUser;