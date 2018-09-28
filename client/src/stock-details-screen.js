import React from 'react';
import StockDetailsRow from './stock-details-row.js';
import { connect } from 'react-redux';
import detailsFetch from './details-fetch.js';
import priceFetch from './price-fetch.js';


class FetchDetails extends React.Component{
    componentDidMount(){
        detailsFetch()
            .then(results=>{
                // console.log(results.companyName);
                this.props.dispatch({type: "SET_STOCK_DETAILS", stockSymbol: results.stockSymbol, description: results.description, companyName: results.companyName})
            })
        priceFetch()
            .then(price=>{
                this.props.dispatch({type: "SET_STOCK_PRICE", stockSymbol: "AAPL", stockPrice: price})
            })
    }
    render(){
        return <StockDetailsScreen {...this.props}/>
    }
}


let StockDetailsScreen = (props) =>{
    // console.log(props);
    return <div>
        <StockDetailsRow {...props} />
    </div>
}

let StockDetailsContainer = connect(state=> state)(FetchDetails);
export default StockDetailsContainer;