import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="main-link">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="website-name">
                <div className="span">ManCas.me</div>
            </div>
        </div>
    )
}

export default NavBar