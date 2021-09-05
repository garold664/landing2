import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div className="menu">
            <h3>Company Name</h3>
            <div>
            <a href="#">Home</a>
            <a href="#showcase">Showcase</a>
            <a href="#services">Services</a>
            <a href="#designers">Designers</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
            </div>
        </div>
    );
}
export default Menu;