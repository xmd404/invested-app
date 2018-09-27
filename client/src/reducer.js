let reducer = (oldState, action) => {
    if (action.type === 'SET_CREDENTIAL_INPUT') {
        console.log(action);
        let key = action.stateName;
        return {
            ...oldState,
            [key]: action.userInput
        }
    }
    else if(action.type ==='SET_STOCK_PRICE'){
        return{
            ...oldState,
            stockPrice: action.stockPrice,
            stockSymbol: action.stockSymbol
        }
    } 
    else if(action.type ==='SET_STOCK_DETAILS'){
        return{
            ...oldState,
            stockSymbol: action.stockSymbol,
            description: action.description,
            companyName: action.companyName
        }
    }
    else {
        return {
            ...oldState
        }
    }
};

export default reducer;