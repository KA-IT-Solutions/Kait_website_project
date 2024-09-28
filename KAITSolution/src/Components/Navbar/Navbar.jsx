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
      <NavLink to="/" className="nav__logo flex items-center">
  <img 
    src={logo} 
    alt="Logo" 
    className="logo-image h-[800px] w-auto md:mt-[10px] mt-[30px] max-w-full" 
  />
</NavLink>


        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link font-bold" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/About" className="nav__link  font-bold" onClick={closeMenuOnMobile}>
                About us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Services" className="nav__link  font-bold" onClick={closeMenuOnMobile}>
                Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Career" className="nav__link  font-bold" onClick={closeMenuOnMobile}>
                Career
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link nav__cta  font-bold" onClick={closeMenuOnMobile}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="fixed top-0 right-0 p-4 z-50 block md:hidden bg-white shadow-lg" id="nav-close" onClick={toggleMenu}>
  <IoClose className="text-3xl text-black" />
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
