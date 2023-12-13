import React, { useState } from "react";
import { Link } from "react-router-dom";
// import App from "./App";
import "./Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h2 className="portifolio">
        port<span className="ifolio">folio.</span>
      </h2>
      <div className={`menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skill">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/home" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/skill" onClick={toggleMenu}>
          Skill
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
      <div className="dropdown-btn" onClick={toggleMenu}>
        &#9776; Menu
      </div>
    </header>
  );
}

export default Header;
