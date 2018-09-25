import React from 'react';

let StockContainer = () =>
    <div className="stock-container">
        <p className="company-name">company</p>
        <p className="company-current-value">Current Value: </p>
        <input type="text" className="buy-quantity"/>
        <button type="button" className="buy-btn">Buy</button>
    </div>

export default StockContainer;