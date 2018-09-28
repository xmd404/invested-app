import React from 'react';
import { connect } from 'react-redux';

let ProfileHeader = (props) =>
    <div>
        <p>User Name: {props.userName}</p>
    </div>


let ConnectedProfileHeader = connect (state=> {
    return {
        userName: state.userName
    }
})(ProfileHeader);

export default ConnectedProfileHeader;