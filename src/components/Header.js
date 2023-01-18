import React from "react";
import "./Header.scss";
import logo from "../images/logo.webp";
import facebook from "../images/facebook.webp";
import instagram from "../images/instagram.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="auto" />
        <h1>Cleaning &amp; Services</h1>
      </div>
      <ul className="links">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/services`}>Services</Link>
        </li>
        <li>
          <Link to={`/getquote`}>Get A Quote</Link>
        </li>
        <li>
          <Link to={`/aboutus`}>About us</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li>
        <li>
          <Link to={`/admin`}>Admin</Link>
        </li>
      </ul>
      <div className="socialIcons">
      <a href="https://www.facebook.com/SBVCleaningServices/" target="_blank" >
      <img src={facebook} alt="auto" />
      </a>
      <a href="https://www.instagram.com/sbvcleaning/" target="_blank">
      <img src={instagram} alt="auto" />
      </a>
      </div>
    </nav>
  );
}

export default Header;
