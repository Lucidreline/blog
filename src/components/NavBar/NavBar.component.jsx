import { Link } from 'react-router-dom'
import './NavBar.styles.scss'
import React from 'react'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-sections">
                <div className="nav-section side">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="nav-section middle">
                    <Link to="/" id="domain">ManCas.me</Link>

                </div>
                <div className="nav-section side">
                    <Link to="/search">Search</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </div>


            </div>
        </div>
    )
}

export default NavBar