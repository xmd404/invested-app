import React from 'react';
import {NavLink} from 'react-router-dom';


let NavBar =() =>
    <div>
        <NavLink to="/userProfile">User Profile</NavLink>
        <NavLink to="/loginScreen">Login Screen</NavLink>
    </div>

export default NavBar;