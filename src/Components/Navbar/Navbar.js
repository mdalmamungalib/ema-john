import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
            <div>
                <Link to="/orders">Shop</Link>
                <Link to="/orderreview">Order Review</Link>
                <Link to="/manageinventory">Manage Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;