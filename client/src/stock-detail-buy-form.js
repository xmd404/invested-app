import React from 'react';

let StockDetailBuyForm = (props) => 
    <form
        onSubmit={ (event) => {
            event.preventDefault();
            props.dispatch({type: 'SET_PORTFOLIO_QUANTITY', portfolioQuantity: props.quantityToBuy})
        }}>
        <div>
            <input 
                onChange={ (event) => {
                    event.preventDefault();
                    let value = event.target.value;
                    props.dispatch({type: 'SET_QUANTITY_TO_BUY', quantityToBuy: value})
                }}
                type="number"
            />
            <p>Qty</p>
        </div>
        <input type="submit" value="Buy Stock" />
        <p>{props.portfolioQuantity}</p>
    </form>

export default StockDetailBuyForm;