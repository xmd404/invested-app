let reducer = (oldState, action) => {
    if (action.type === 'SET_LOGIN_EMAIL_INPUT') {
        console.log(action);
        return {
            ...oldState,
            loginEmailInput: action.userInput
        }
    } else {
        return {
            ...oldState
        }
    }
}

export default reducer;