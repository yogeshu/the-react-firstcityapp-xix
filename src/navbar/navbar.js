import "./navbar.scss";

import React, { Component } from 'react';

import logo from "../logo.png";

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 

            <nav className="navbar">
            <img src={logo} alt="city tours logo"/>
         

            <ul className="nav-links">
           
            <li> 
            <a href="/" className="nav-link">
            Home
            </a>

            </li>
            <li> 
            <a href="/" className="nav-link">
            Abouts
            </a>

            </li>
            <li> 
            <a href="/" className="nav-link">
            Tours
            </a>

            </li>
            
            
            
            
            
            </ul>
            </nav>
         );
    }
}
 
export default Navbar;