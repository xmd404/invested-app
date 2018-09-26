import React from 'react';
import { connect } from 'react-redux';
import StockCard from './stock-card';

let mapStateToProps = (state) => {
    return {stocks: state.stocks}
}

let MarketScreen = (props) =>
    <div>
        <div className="screen-header">
            <h1>Marketplace</h1>
        </div>
        <div>
            {props.stocks.map(stock =>
                <StockCard stock={stock} key={stock.symbol} />
            )}
        </div>
    </div>

let MarketScreenContainer = connect(mapStateToProps)(MarketScreen);
export default MarketScreenContainer;