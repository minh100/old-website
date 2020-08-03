import React, { useState } from 'react';
import '../css/Navbar.css';

function Navbar() {

    
    const [open, toggleOpen] = useState(false);

    function handleButtonClick(){
        toggleOpen(!open)
      };
    

    return (
        <nav className="NavbarItems" >
            <a href="#welcome" className="navbar-logo">Minh Truong</a>
            <div className="menu-icon" onClick={handleButtonClick}>
                <i className={open ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                {Menu.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>

    );
}

export default Navbar;

const Menu = [
    {
        title: 'Home',
        url: '#welcome',
        cName: 'nav-links'
    },
    {
        title: 'About',
        url: '#about',
        cName: 'nav-links'
    },
    {
        title: 'Projects',
        url: '#project',
        cName: 'nav-links'
    },
    {
        title: 'Contact',
        url: '#contact',
        cName: 'nav-links'
    }
];