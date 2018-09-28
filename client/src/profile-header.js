import React from 'react';
import { connect } from 'react-redux';

let ProfileHeader = (props) =>
    <div>
        <p>User Name: {props.userName}</p>
        <p>Cash: {props.userCash}</p>
        <p>Portfolio Value: {props.userPortfolioValue}</p>
    </div>


let ConnectedProfileHeader = connect (state=> {
    return {
        userName: state.userName,
        userCash: state.userCash,
        userPortfolioValue: state.userPortfolioValue
    }
})(ProfileHeader);

export default ConnectedProfileHeader;