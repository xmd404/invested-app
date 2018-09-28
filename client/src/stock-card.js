import React from 'react';
import { connect } from 'react-redux';

let StockCard = (props) =>{
    return <div className="stock-card">
        <br/>
        <div className="stock-info-short">
            <h3 className="company-name">Company: {props.companyName}</h3>
            <h4 className="company-description">Industry: {props.industry}</h4>
            <p className="current-stock-price">Stock Price: {props.stockPrice}</p>
        </div>
        <div className="buy-info">
            <input className="qty-input" type="text" placeholder="Qty"/>
            <button className="buy-btn">Buy</button>
        </div>
    </div>
}

let connectedStockCard = connect(state=>state)(StockCard);
export default connectedStockCard;