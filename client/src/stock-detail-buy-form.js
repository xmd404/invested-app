import React from 'react';

let StockDetailBuyForm = () => 
    <form>
        <div>
            <input 
                type="number"
            />
            <p>Qty</p>
        </div>
        <input type="submit" value="Buy Stock" />
    </form>

export default StockDetailBuyForm;