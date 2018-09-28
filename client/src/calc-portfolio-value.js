// db query to get quantity owned
// access state to get current value

let calcPortfolioValue = (quantityOwned, currentValue) => {
    let portfolioValue = quantityOwned * currentValue;
    return portfolioValue;
};

export default calcPortfolioValue;