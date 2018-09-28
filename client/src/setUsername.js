let setUsername = (props) => {
    props.dispatch({type: 'SET_USERNAME', userName: props.loginEmailInput})
}

export default setUsername;