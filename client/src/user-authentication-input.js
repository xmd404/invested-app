import React from 'react';

let UserAuthenticationInput = (props) => {
    return <div className={props.inputClassName}>
        <input 
        onChange={ (event) => {
            let value = event.target.value;
            props.stateFunction(value);
        } }
        value={props.stateName}
        type={props.type} className={props.className + '-input'} placeholder={props.placeHolder}>
        </input>
    </div>
}


export default UserAuthenticationInput;