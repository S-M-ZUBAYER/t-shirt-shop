import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='orders'>Orders</Link>
            <Link to='about'>About</Link>
            <Link to='inventory'>Inventory</Link>
        </nav>
    );
};

export default Header;