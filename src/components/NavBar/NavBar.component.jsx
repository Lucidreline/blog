import { Link } from 'react-router-dom'
import './NavBar.styles.scss'
import React, { useState } from 'react'

const NavBar = () => {
    // these bad bois are for the mobile ham menu
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false)

    return (
        <div className="nav-bar">
            <div className="nav-sections">
                <div className="nav-section side desktop-only">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="nav-section middle">
                    <Link to="/" id="domain">ManCas.me</Link>

                </div>
                <div className="nav-section side desktop-only">
                    <Link to="/search">Search</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </div>

                {/* This is the hamburger menu, complicated cause I want the button to animate */}
                <div className="mobile-hamburger" onClick={toggleMenu}>
                    {/* three lines of the icon */}
                    <span className={`line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`line ${isOpen ? 'open' : ''}`}></span>
                </div>

                {/* the menu that pops up */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <nav className="mobile-links">
                        <Link to="/" onClick={closeMenu}>Home</Link>
                        <Link to="/about" onClick={closeMenu}>About</Link>
                        <Link to="/search" onClick={closeMenu}>Search</Link>
                        <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default NavBar