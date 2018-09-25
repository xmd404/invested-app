import React from 'react';
import { connect } from 'react-redux';

let PriceFetch = () => {
    fetch(`https://api.iextrading.com/1.0/stock/aapl/price.json`)
        .then(response =>{
            return response.json()})
            .then(data =>{
                console.log(data);
                return data
            })
}

let connectedPriceFetch = connect(state => state)(PriceFetch);

export default connectedPriceFetch;