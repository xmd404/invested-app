import React from 'react';

let StockDetailBuyForm = (props) => 
    <form
        onSubmit={ (event) => {
            event.preventDefault();
            props.dispatch({type: 'SET_PORTFOLIO_QUANTITY', portfolioQuantity: 2})
        }}>
        <div>
            <input 
                onSubmit={ (event) => {
                    event.preventDefault();
                }}
                type="number"
            />
            <p>Qty</p>
        </div>
        <input type="submit" value="Buy Stock" />
    </form>

export default StockDetailBuyForm;