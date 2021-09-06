import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    return (
        <>
           <div className="navbar">
               <NavLink to="/profile">Profile</NavLink>
               <NavLink to="/dialogs">Messages</NavLink>
               <NavLink to="users">Users</NavLink>
           </div>
            
        </>
  );
}

export default Navbar;

