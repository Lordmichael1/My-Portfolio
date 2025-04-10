import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/MyLogo.png';
import './Header.css'; 
import Hamburger from 'hamburger-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="MainHeader">
      <div className="subHeader">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>            
        </div>

        {/* Hamburger menu */}
        <div>
          <Hamburger toggled={menuOpen} toggle={toggleMenu} size={24} color="white" />
        </div>

        {/* Navigation links */}
        <div className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link to="/projects"  className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
