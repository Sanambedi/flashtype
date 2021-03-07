import React from 'react';
import logo from "../../assests/logo.png";
import "./Nav.css";
const Nav = () => {
    return ( 
        <div className="nav-container">
            <div className="nav-left">
                <img src= {logo} className="flash-logo" alt=""/>
                <p className="flash-logo-text">FlashType</p>
            </div>
        </div>
     );
}

export default Nav;