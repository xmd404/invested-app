import filterStockHistory from './filterStockHistory';

let stockHistoryFetch = (req, res) => {
    return fetch('https://api.iextrading.com/1.0/stock/aapl/chart')
    .then(response=> {
        return response.json()
    })
        .then(data=> {
            let history = data;
            console.log(history);
            let filteredDates = filterStockHistory(history);
            return filteredDates;
        })
};

export default stockHistoryFetch;