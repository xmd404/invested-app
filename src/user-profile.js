import React from 'react';
import StockCard from './stock-card.js';

let UserProfile =()=>
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

export default UserProfile;