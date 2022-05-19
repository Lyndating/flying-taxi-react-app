import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="logo192.png" alt="logo"/>
            </div>
            <div className="header__right">
                <Link className="headerOption" to="/">Home</Link>
                <Link className="headerOption"to="/service">Service</Link>
                <Link className="headerOption" to="/Contact">Contact</Link>
            </div>
            <button className='header-btn'>Call Us</button>
        </div>  
    )
}

export default Header;