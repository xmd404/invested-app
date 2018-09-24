import React from 'react';

let UserAuthenticationInput = (props) =>
    <div>
        <input type="text" className={props.className} placeHolder={props.placeHolder}>
        </input>
    </div>


export default UserAuthenticationInput;