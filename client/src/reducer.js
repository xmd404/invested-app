let reducer = (oldState, action) => {
    if (action.type === 'SET_CREDENTIAL_INPUT') {
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
            companyName: action.companyName,
            industry: action.industry,
        }
    } else if (action.type === 'SET_QUANTITY_TO_BUY') {
        return {
            ...oldState,
            quantityToBuy: action.quantityToBuy
        }
    } else if (action.type ==='SET_PORTFOLIO_QUANTITY') {
        return {
            ...oldState,
            portfolioQuantity: action.portfolioQuantity,
            userCash: (action.userCash),
            userPortfolioValue: action.userPortfolioValue
        }
    } else if (action.type === 'CLEAR_LOGIN_INPUT') {
        return {
            ...oldState,
            loginEmailInput: '',
            loginPasswordInput: ''
        }
    } else if (action.type === 'CLEAR_SIGNUP_INPUT') {
        return {
            ...oldState,
            signupNameInput: '',
            signupEmailInput: '',
            signupPasswordInput: '',
        }
    } else if (action.type === 'SET_USERNAME') {
        return {
            ...oldState,
            userName: action.userName
        }
    } else if (action.type === 'SET_PROFILE_HEADER') {
        return {
            ...oldState,
            userEmail: action.userEmail,
            userName: action.userName,
            userCash: action.userCash,
            userPortfolioValue: action.userPortfolioValue,
            portfolioQuantity: action.portfolioQuantity
        }
    } else {
        return {
            ...oldState
        }
    }
};

export default reducer;