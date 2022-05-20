import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import Home from './Home';
import Service from './Service';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <Link to="/"><img src="taxi-logo.png" alt="logo"/></Link>
                
            </div>
            <div className="footer__right">
                <Link className="footerOption"to="#">About Us</Link>
                <Link className="footerOption" to="/service">Service</Link>
            </div>
            {/* <button className='header-btn'>Call Us</button> */}
        </div>  
    )
}

export default Footer;