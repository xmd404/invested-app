import React from 'react';
import { NavLink } from 'react-router-dom';
import UserName from './user-name.js';

let NavBar = () =>
    <div className="nav-bar">
        <div className="nav-links">
            <NavLink to="/login">||  Login  |</NavLink>
            <NavLink to="/profile">|  Profile  |</NavLink>
            <NavLink to="/details">|  Details  ||</NavLink>
        </div>
    </div>

export default NavBar;