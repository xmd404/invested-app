import React from 'react';

let StockDetailBuyForm = (props) => 
    <form
        onSubmit={ (event) => {
            event.preventDefault();
            let updatedUserCash = props.userCash - (props.quantityToBuy * props.stockPrice)
            props.dispatch({type: 'SET_PORTFOLIO_QUANTITY', portfolioQuantity: props.quantityToBuy, userCash: updatedUserCash.toFixed(2)})
            let userInformation = { userEmail: props.userEmail, cash: updatedUserCash};
            console.log(userInformation);
            fetch(`${process.env.REACT_APP_APIHOST}/updatecash`, {
                method: 'PUT',
                body: JSON.stringify(userInformation),
                headers: {'Content-Type': 'application/json'}
            })
            .then(result=> {
                console.log(result);
            })

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
    </form>

export default StockDetailBuyForm;