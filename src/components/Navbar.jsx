import React, { useState } from "react";
import "../sass/_navbar.scss";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="nav-wrapper">
      <nav className="container nav">
        <Link className="logo" to={"/"}>
          <img src={logo} alt="logo" />
          <h3>
            Broadway <br /> Academy
          </h3>
        </Link>
        <ul className={`nav-links ${showNavbar && "active"}`}>
          <li>
            <Link to={"/kurslar"}>Kurslar</Link>
          </li>
          <li className="phone-number-li">
            <button className="phone-number mobile-phone">
              <a href="tel:+998998082888" title="Call">
                +998998082888
              </a>
            </button>
          </li>
        </ul>
        <button className="phone-number">
          <i className="bx bxs-phone-call"></i>
          <a href="tel:+998998082888" title="Call">
            +998998082888
          </a>
        </button>
        <div className="burger" onClick={handleShowNavbar}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
