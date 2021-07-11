import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div className="NavBar NavBar--fixed">
      <a href="/">
        <img src={logo} alt="logo"></img>
      </a>
    </div>
  );
};

export default NavBar;
