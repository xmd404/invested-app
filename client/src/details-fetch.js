// const fetch = require('node-fetch');

let detailsFetch = () => {
    return fetch(`https://api.iextrading.com/1.0/stock/aapl/company`)
        .then(response =>{
            return response.json()})
            .then(data =>{
                let results = (data);
                console.log(results.symbol, results.companyName, results.industry, results.description);
                return results;
            })
}

// detailsFetch();

export default detailsFetch;