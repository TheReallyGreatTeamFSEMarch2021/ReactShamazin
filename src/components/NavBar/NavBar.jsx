import React from 'react';
import './NavBar.css';
import navLogo from '../../assets/navLogo.png'
import {navLink} from 'react-router-dom';

function NavBar(){
    return <div className="navBar">
        <img className="navLogo" src={navLogo} />
        
    </div>
}
export default NavBar;
