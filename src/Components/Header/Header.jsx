import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/MyLogo.png';

const Header = () => {
  const location = useLocation();

  return (
    <div className='MainHeader'>
        <div className="subHeader">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>            
            </div>
            <div className="nav">
            <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About me
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact me
          </Link>
          <Link 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            My Projects
          </Link>
          <Link 
            to="/resume" 
            className={location.pathname === '/resume' ? 'active' : ''}
          >
            Resume/CV
          </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Header
