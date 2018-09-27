let reducer = (oldState, action) => {
    if (action.type === 'SET_CREDENTIAL_INPUT') {
        console.log(action);
        let key = action.stateName;
        return {
            ...oldState,
            [key]: action.userInput
        }
    } else {
        return {
            ...oldState
        }
    }
};

export default reducer;