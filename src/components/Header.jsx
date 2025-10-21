import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="header">
      <div className="logo">
        <h1>MyWebsite</h1>
      </div>

      <nav className={`nav ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>

          <li className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              Services ▼
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li><a href="#social">Social Media</a></li>
              <li><a href="#seo">SEO</a></li>
              <li><a href="#web">Web Development</a></li>
              <li><a href="#paid">Paid Ads</a></li>
              <li><a href="#reputation">Reputation Management</a></li>
            </ul>
          </li>

          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
