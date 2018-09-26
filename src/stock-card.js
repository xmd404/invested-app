import React from 'react';
import priceFetch from './price-fetch.js';

let StockCard = () =>{
    return <div className="stock-card">
        <br/>
        <div className="stock-info-short">
            <h3 className="company-name">Company Name</h3>
            <p className="company-description">Short company description.</p>
            <p className="current-stock-price">Stock Price: {priceFetch()}</p>
        </div>
        <div className="buy-info">
            <input className="qty-input" type="text" placeholder="Qty"/>
            <button className="buy-btn">Buy</button>
        </div>
    </div>
}

export default StockCard;