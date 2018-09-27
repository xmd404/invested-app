import React from 'react';
import { connect } from 'react-redux';
import StockCard from './stock-card.js';
import priceFetch from './price-fetch.js';

let mapStateToProps = (state) => {
    return {stocks: state.stoks}
}

class FetchStocks extends React.Component{
    componentDidMount(){
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
            <h1>User Portfolio</h1>
            <p>Here are the users stock and current value</p>
        </div>
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
    </div>

let UserProfileContainer = connect(mapStateToProps)(FetchStocks);
export default UserProfileContainer;
