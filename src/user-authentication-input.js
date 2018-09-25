import React from 'react';

let UserAuthenticationInput = (props) => {
    console.log(props);
    return <div>
        <input 
        // onChange={}
        onChange={ (event) => {
            let value = event.target.value;
            console.log(value);
            props.stateFunction(event.target.value);
        } }
        value={props.userName}
        type={props.type} className={props.className} placeholder={props.placeHolder}>
        </input>
    </div>
}


export default UserAuthenticationInput;