import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css';
import logo from '../../img/logo.png'


function Header() {
    return (
        <>
           <div className="header">
               <NavLink to="/">
                <img src={logo} />
               </NavLink>
           </div>
            
        </>
  );
}

export default Header;

