import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ka from "../projectImages/ka.png"
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img className='logoSize' width="50" src={ka} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#hero' onClick={closeMenu}>Home</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#experience' onClick={closeMenu}>Experience</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#expertise' onClick={closeMenu}>Skills</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar