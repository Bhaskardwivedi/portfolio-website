import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => { 
    return(
        <nav style={{ padding: '15px', backgroundcolor: '#f0f0f0'}}> 
            <ul>
            <Link to="/" style={{ marginRight: '15px' }}>Home</Link> 
            <Link to="/about" style={{ marginRight: '15px' }}>About Us</Link> 
            <Link to="/contact" style={{ marginRight: '15px' }}>Contact Us</Link> 
            <Link to="/Projects" style={{ marginRight: '15px' }}>Projects</Link> 
            <Link to="/skills" style={{ marginRight: '15px' }}>Skills</Link>  
            <Link to="/blogs" style={{ marginRight: '15px' }}>Blogs</Link> 
            <Link to="/contact" style={{ marginRight: '15px' }}>Contact Us</Link>
            <Link to="/chat" >Chat With Us</Link>
            </ul>
        </nav>
    );
}; 

export default Navbar;
