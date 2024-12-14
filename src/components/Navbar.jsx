import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
import logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
      </NavLink>
      <NavLink to="/flat">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
    
  );

}
export default Navbar;