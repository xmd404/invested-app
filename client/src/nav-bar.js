import React from 'react';
import { NavLink } from 'react-router-dom';

let NavBar = () =>
    <div className="nav-bar">
        <div className="nav-links">
            <NavLink to="/login">||  Login  |</NavLink>
            <NavLink to="/profile">|  Profile  |</NavLink>
            <NavLink to="/details">|  Details  ||</NavLink>
        </div>
    </div>

export default NavBar;