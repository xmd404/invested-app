import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let StockCard = (props) =>{
    return <div className="stock-card">
        <div className="stock-info-short">
            <h3 className="company-name">Company: {props.companyName}</h3>
            <p className="company-description">Industry: {props.industry}</p>
            <p className="current-stock-price">Current Price: {props.stockPrice}</p>
            <p>Quantity Owned: {props.portfolioQuantity}</p>
        </div>
        <div className="buy-info">
            <input className="qty-input" type="text" placeholder="Purchase Quantity"/>
            <NavLink to="/details"><button className="btn buy" onSubmit="">Buy More</button></NavLink>
        </div>
    </div>
}

let connectedStockCard = connect(state=>state)(StockCard);
export default connectedStockCard;