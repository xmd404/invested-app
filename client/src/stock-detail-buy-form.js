import React from 'react';

let StockDetailBuyForm = (props) => 
    <form
        onSubmit={ (event) => {
            event.preventDefault();
            console.log(props);
            let updatedPortfolioQuantity = Number(props.portfolioQuantity) + Number(props.quantityToBuy);
            console.log(updatedPortfolioQuantity);
            let updatedUserCash = props.userCash - (props.quantityToBuy * props.stockPrice);
            let updatedPortfolioValue = Number(props.stockPrice) * Number(updatedPortfolioQuantity);
            console.log(updatedPortfolioValue);
            props.dispatch({type: 'SET_PORTFOLIO_QUANTITY', portfolioQuantity: updatedPortfolioQuantity, userCash: updatedUserCash.toFixed(2), userPortfolioValue: updatedPortfolioValue})
            let userInformation = { userEmail: props.userEmail, cash: updatedUserCash, portfolioQuantity: updatedPortfolioQuantity};
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
        <input type="submit" value="Buy Stock" className="btn buy" />
    </form>

export default StockDetailBuyForm;