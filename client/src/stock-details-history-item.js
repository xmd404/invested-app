import React from 'react';

let StockDetailsHistoryItem = (props) =>
    <li>
        <p>{props.date.close}</p>
        <p>{props.date.date}</p>
    </li>


export default StockDetailsHistoryItem;