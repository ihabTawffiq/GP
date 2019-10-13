import React from 'react';
import { Link , NavLink } from "react-router-dom";
const Nav = () =>{
    return(
        <nav className="nav-wrapper blue accent-4">
            <div className="container">
                <a href="/" className="brand-logo">SchoolSystem</a>
            </div>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav