import React from 'react';
import { connect } from 'react-redux';

let ProfileHeader = (props) =>
    <div className="profile-header">
        <h3>User Name: {props.userName}</h3>
        <h3>Cash: ${props.userCash}</h3>
        <h3>Portfolio Value: {props.userPortfolioValue}</h3>
    </div>


let ConnectedProfileHeader = connect (state=> {
    return {
        userName: state.userName,
        userCash: state.userCash,
        userPortfolioValue: state.userPortfolioValue
    }
})(ProfileHeader);

export default ConnectedProfileHeader;