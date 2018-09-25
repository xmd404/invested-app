import React from 'react';
import StockCard from './stock-card';

let MarketScreen = () =>
    <div>
        <div className="screen-header">
            <h1>MarketScreen</h1>
            <p>Stock information will go here.</p>
        </div>
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
    </div>

export default MarketScreen;