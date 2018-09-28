import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import UserProfile from './user-profile.js';
import LoginScreen from './login-screen.js';
import SignupScreen from './signup-screen';
// import MarketScreen from './market-screen';
import StockDetailsScreen from './stock-details-screen';
import NavBar from './nav-bar.js';


let Router = () => {
    return (
        <HashRouter>
            <div>
                <NavBar />
                <Route exact path="/" component={LoginScreen} />
                <Route exact path="/profile" component={UserProfile} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/signup" component={SignupScreen} />
                <Route exact path="/details" component={StockDetailsScreen} />
            </div>
        </HashRouter>
    )
}

export default Router;
