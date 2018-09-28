import React from 'react';
import { connect } from 'react-redux';
import StockCard from './stock-card.js';
import priceFetch from './price-fetch.js';
import detailsFetch from './details-fetch'

let mapStateToProps = (state) => {
    return {stocks: state.stoks}
}

class FetchStocks extends React.Component{
    componentDidMount(){
        detailsFetch()
            .then(results=>{
                console.log(results.companyName);
                this.props.dispatch({type: "SET_STOCK_DETAILS", stockSymbol: results.stockSymbol, description: results.description, companyName: results.companyName, industry: results.industry})
            })
        priceFetch()
            .then(price=>{
                this.props.dispatch({type: "SET_STOCK_PRICE", stockSymbol: "AAPL", stockPrice: price})
            })
    }
    render(){
        return <UserProfile />
    }
}

let UserProfile = (props) =>
    <div>
        <div className="screen-header">
            <h1>My Portfolio</h1>
        </div>
        <div className="container">
            <StockCard stock={props}/>
            <StockCard stock={props}/>
            <StockCard stock={props}/>
        </div>
    </div>

let UserProfileContainer = connect(state=> state)(FetchStocks);
export default UserProfileContainer;
