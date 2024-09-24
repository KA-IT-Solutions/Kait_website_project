import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import logo from './kaitLogo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/About" className="nav__link" onClick={closeMenuOnMobile}>
                About us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Services" className="nav__link" onClick={closeMenuOnMobile}>
                Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Career" className="nav__link" onClick={closeMenuOnMobile}>
                Career
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link nav__cta" onClick={closeMenuOnMobile}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
