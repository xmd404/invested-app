import React from 'react';

let loginInput = (props) =>
    <div>
        <input type="text" className={props.className} placeHolder={props.placeHolder}>
        </input>
    </div>


export default loginInput;