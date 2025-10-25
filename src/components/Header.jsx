import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../public/logotop.jpeg"; // Replace with your logo path

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to close both the dropdown and the sidebar/menu
  const handleLinkClick = () => {
    setShowDropdown(false);
    setMenuOpen(false);
  };
  
  // New function to close the menu (used by the overlay and the close button)
  const closeMenu = () => {
    setMenuOpen(false);
  }

  // Close dropdown when clicked outside (on desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click is outside the dropdown container AND the dropdown is visible
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]); // Dependency array includes showDropdown to run when it changes

  // Close dropdown when menu is closed on mobile (for better UX)
  useEffect(() => {
    if (!menuOpen) {
      setShowDropdown(false);
    }
  }, [menuOpen]);

  return (
    <header className="header">
      {/* Overlay/Backdrop: Visible when menuOpen is true on mobile */}
      {menuOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}

      {/* Left Logo */}
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger for small screens */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links (The Sidebar on mobile) */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* Close Button for the sidebar */}
        <button className="close-sidebar-btn" onClick={closeMenu}>
          ✕
        </button>
        
        <Link to="/social-media" onClick={handleLinkClick}>Social Media</Link>
        <Link to="/seo" onClick={handleLinkClick}>SEO</Link>

        {/* Dropdown Menu */}
        <div className="dropdown" ref={dropdownRef}>
          <button className="dropdown-btn" onClick={toggleDropdown}>
            Web Development ▾
          </button>

          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <Link to="/web-development#web-development-services" onClick={handleLinkClick}>Web Development Services</Link>
                <Link to="/web-development#shopify-development-services" onClick={handleLinkClick}>Shopify Development Services</Link>
                <Link to="/web-development#wordpress-development-services" onClick={handleLinkClick}>WordPress Development Services</Link>
                <Link to="/web-development#website-maintenance-services" onClick={handleLinkClick}>Website Maintenance Services</Link>
                <Link to="/web-development#custom-web-apps" onClick={handleLinkClick}>Custom Web Apps</Link>
              </div>
            </div>
          )}
        </div>
        {/* End Dropdown Menu */}

        <Link to="/paid-ads" onClick={handleLinkClick}>Paid Ads</Link>
        <Link to="/reputation-management" onClick={handleLinkClick}>Reputation Management</Link>
        <Link to="/work" onClick={handleLinkClick}>Work</Link>
      </nav>

      {/* Right Side Button (Hidden on small screens via CSS) */}
      <div className="right-btn">
        <button className="primary-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;