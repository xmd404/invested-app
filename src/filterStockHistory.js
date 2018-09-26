let filterStockHistory = (dates) => {
    let mostRecentDates = [];
    for (let i = 0; i < 5; i++) {
        mostRecentDates.push(dates[dates.length - (1 + i)]);
    }
    return mostRecentDates;
}

export default filterStockHistory;