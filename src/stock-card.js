import React from 'react';

let StockCard = () =>
    <div className="stock-card">
        <br/>
        <div className="stock-info-short">
            <h3 className="company-name">Company Name</h3>
            <p className="company-description">Short company description.</p>
            <p className="current-stock-price">Stock price: $0.00</p>
        </div>
        <div className="buy-info">
            <input className="qty-input" type="text" placeholder="Qty"/>
            <button className="buy-btn">Buy</button>
        </div>
    </div>

export default StockCard;