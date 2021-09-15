import React from 'react'
import {NavLink} from 'react-router-dom'
import Friend from './friend/Friend';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className="navbar">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="users">Users</NavLink>
            <div className="friends">
                {
                    props.navbar.friends.map((e) => {
                        return <Friend ava = {e.ava} name = {e.name} />
                    })
                }
            </div>
        </div>
  );
}

export default Navbar;

