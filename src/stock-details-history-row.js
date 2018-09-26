import React from 'react';
import StockDetailsHistoryItem from './stock-details-history-item';

let StockDetailsHistoryRow = (props) => 
    <ul className="stock-details-history-row">
        {props.dates.map(date=>
            <StockDetailsHistoryItem date={date}/>
        ) }
    </ul>


export default StockDetailsHistoryRow;