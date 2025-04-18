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
        <div className='hamburger'>
          <Hamburger toggled={menuOpen} toggle={toggleMenu} size={24} color="white" />
        </div>

        {/* Navigation links */}
        <div className={`nav ${menuOpen ? 'active' : ''}`}>
          <div className="txt">
          <Link to="/about" onClick={toggleMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/contact" onClick={toggleMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link to="/projects" onClick={toggleMenu} className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/resume" onClick={toggleMenu} className={location.pathname === '/resume' ? 'active' : ''}>Resume/CV</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
