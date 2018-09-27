import React from 'react';

let UserAuthenticationInput = (props) => {
    console.log(props)
    return <div className={props.inputClassName}>
        <input 
            onChange={ (event) => {
                let value = event.target.value;
                // props.stateFunction(value);
                console.log(value);
                props.dispatch({type: 'SET_LOGIN_EMAIL_INPUT', userInput: value})
            } }
            value={props.stateInput}
            type={props.type} 
            className={props.className + '-input'} 
            placeholder={props.placeHolder}
        >
        </input>
    </div>
}


export default UserAuthenticationInput;