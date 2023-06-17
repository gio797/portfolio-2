import React, { useState } from "react";
import logo from "../images/devjane.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
            <Link
              to="/"
              className="nav__link"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <HashLink
              to={"/#services"}
              className="nav__link"
              onClick={() => setShowMenu(false)}
            >
              My Services
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink
              to={"/#about"}
              className="nav__link"
              onClick={() => setShowMenu(false)}
            >
              About me
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink
              to={"/#work"}
              className="nav__link"
              onClick={() => setShowMenu(false)}
            >
              My Work
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
