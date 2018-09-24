import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import UserProfile from './user-profile.js';
import LoginScreen from './login-screen.js';
import NavBar from './nav-bar.js';



let Router = ()=>{
    return <HashRouter>
            <div>
                <NavBar />
                <Route exact path="/" component={UserProfile}/>
                <Route exact path="/userProfile" component={UserProfile} />
                <Route exact path="/loginScreen" component={LoginScreen} />
            </div>
        </HashRouter>
}

export default Router;
