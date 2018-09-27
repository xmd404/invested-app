let reducer = (oldState, action) => {
    if (action.type === 'SET_LOGIN_EMAIL_INPUT') {
        console.log(action);
        return {
            ...oldState,
            loginEmailInput: action.userInput
        }
    }
    else if(action.type ==='SET_STOCK_PRICE'){
        return{
            ...oldState,
            stockPrice: action.stockPrice,
            stockSymbol: action.stockSymbol
        }
    } else {
        return {
            ...oldState
        }
    }
};

export default reducer;