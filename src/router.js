import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import UserProfile from './user-profile.js';
import LoginScreen from './login-screen.js';
import SignupScreen from './signup-screen';
import NavBar from './nav-bar.js';



let Router = ()=>{
    return <HashRouter>
            <div>
                <NavBar />
                <Route exact path="/" component={UserProfile}/>
                <Route exact path="/userProfile" component={UserProfile} />
                <Route exact path="/loginScreen" component={LoginScreen} />
                <Route exact path="/signup" component={SignupScreen} />
            </div>
        </HashRouter>
}

export default Router;
