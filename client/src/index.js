import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reducer from './reducer';


let initialState = {
    stocks: [
        {
            "symbol": "AAPL",
            "companyName": "Apple Inc.",
            "description": "Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications."
        },
        {
            "symbol": "GOOGL",
            "companyName": "Alphabet Inc.",
            "description": "Alphabet Inc is a provider of internet content products and portals. Its suite of brands includes Search, Android, YouTube, Apps, Maps & Ads."
        },
        {
            "symbol": "AMZN",
            "companyName": "Amazon.com Inc.",
            "description": "Amazon.com Inc is an online retailer. The Company sells its products through the website which provides services, such as advertising services and co-branded credit card agreements. It also offers electronic devices like Kindle e-readers and Fire tablets."
        },
        {
            "symbol": "TSLA",
            "companyName": "Tesla Inc.",
            "description": "Tesla Inc is a vertically integrated sustainable energy company. It designs, develops, manufactures and sells high-performance fully electric vehicles and electric vehicle powertrain components."
        }
    ],
    loginEmailInput: '',
    loginPasswordInput: '',
    portfolioQuantity: '',
    companyName: '',
    description: ''
}

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let App = 
    <Provider store={store}>
        <Router />
    </Provider>

ReactDOM.render(App, document.getElementById('root'));