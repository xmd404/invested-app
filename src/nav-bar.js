import React from 'react';
import {NavLink} from 'react-router-dom';
import UserName from './user-name.js';


let NavBar =() =>
    <div>
        <NavLink to="/userProfile">User Profile</NavLink>
        <NavLink to="/loginScreen">Login Screen</NavLink>
        <UserName />
    </div>

export default NavBar;