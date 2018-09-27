let priceFetch = () => {
    return fetch(`https://api.iextrading.com/1.0/stock/aapl/price`)
        .then(response =>{
            return response.json()})
            .then(data =>{
                let results = data;
                console.log(results);
                return results;
            })
}

// let connectedPriceFetch = connect(state => state)(priceFetch);
export default priceFetch;