import React from 'react';

let UserAuthenticationInput = (props) => {
    return <div>
        <input 
        onChange={ (event) => {
            let value = event.target.value;
            props.stateFunction(event.target.value);
        } }
        value={props.stateName}
        type={props.type} className={props.className} placeholder={props.placeHolder}>
        </input>
    </div>
}


export default UserAuthenticationInput;