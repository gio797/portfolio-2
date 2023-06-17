import React, { useState } from "react";
import logo from "../images/devjane.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button
        className={showMenu ? "nav-toggle active" : "nav-toggle"}
        aria-label="toggle navigation"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <span className={showMenu ? "hamburger active" : "hamburger"}></span>
      </button>
      <nav className={showMenu ? "nav active" : "nav"}>
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="#home"
              className="nav__link"
              onClick={() => setShowMenu(false)}
            >
              Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#services"
              className="nav__link"
              onClick={() => setShowMenu(false)}
            >
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#about"
              className="nav__link"
              onClick={() => setShowMenu(false)}
            >
              About me
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#work"
              className="nav__link"
              onClick={() => setShowMenu(false)}
            >
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
