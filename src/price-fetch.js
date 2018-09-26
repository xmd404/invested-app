import { connect } from 'react-redux';
const fetch = require('node-fetch');

let priceFetch = () => {
    fetch(`https://api.iextrading.com/1.0/stock/aapl/price`)
        .then(response =>{
            return response.json()})
            .then(data =>{
                let results = JSON.stringify(data);
                console.log(results);
                return results;
            })
}

// let connectedPriceFetch = connect(state => state)(priceFetch);

export default priceFetch;