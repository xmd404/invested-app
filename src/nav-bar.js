import React from 'react';
import { NavLink } from 'react-router-dom';


let NavBar = () =>
    <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/market">Market</NavLink>
    </div>

export default NavBar;