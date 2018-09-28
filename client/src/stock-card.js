import React from 'react';
import { connect } from 'react-redux'

let StockCard = (props) =>{
    return <div className="stock-card">
        <br/>
        <div className="stock-info-short">
            <h3 className="company-name">Company Name</h3>
            <p className="company-description">Short company description.</p>
            <p className="current-stock-price">Stock Price: {props.stockPrice}</p>
            <p>Current Quantity: {props.portfolioQuantity}</p>
        </div>
        <div className="buy-info">
            <input className="qty-input" type="text" placeholder="Qty"/>
            <button className="buy-btn">Buy</button>
        </div>
    </div>
}

let connectedStockCard = connect(state=>state)(StockCard);

export default connectedStockCard;