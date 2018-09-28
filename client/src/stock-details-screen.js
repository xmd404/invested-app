import React from 'react';
import StockDetailsRow from './stock-details-row.js';
import { connect } from 'react-redux';
import detailsFetch from './details-fetch.js';
import priceFetch from './price-fetch.js';
import ProfileHeader from './profile-header';


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
        return (
            <div>
                <ProfileHeader />
                <div className="screen-header">
                    <h1>Stock Details</h1>
                </div>
                <StockDetailsScreen {...this.props}/>
            </div>
        )
    }
}


let StockDetailsScreen = (props) =>{
    console.log(props);
    return (
        <div className="container">
            <StockDetailsRow {...props} />
        </div>
    )
}

let StockDetailsContainer = connect(state=> state)(FetchDetails);
export default StockDetailsContainer;