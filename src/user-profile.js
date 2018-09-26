import React from 'react';
import { connect } from 'react-redux';
import StockCard from './stock-card.js';

let mapStateToProps = (state) => {
    return {stocks: state.stoks}
}

let UserProfile = () =>
    <div>
        <div className="screen-header">
            <h1>User Portfolio</h1>
            <p>Here are the users stock and current value</p>
        </div>
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
    </div>

let UserProfileContainer = connect(mapStateToProps)(UserProfile);
export default UserProfileContainer;
