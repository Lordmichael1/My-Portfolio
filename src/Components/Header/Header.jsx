import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/MyLogo.png';
import './Header.css'; // Assuming the styles are saved in Header.css

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="MainHeader">
      <div className="subHeader">
        <div className="logo">
          <Link to="/" className="nav-link">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation links */}
        <div className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
