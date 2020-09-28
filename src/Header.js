import React from "react";
import SocialFollow from "./SocialFollow";
import NavBar from "./NavBar.js";
import logo from "./logo.png";

const Header = (props) => {
  return (
    <header>
      <NavBar cart={props.cart} />
      <div className="header-container wrapper">
        <img className="logo" src={logo} alt="" />
        <div className="heading">
          <h1>
            Run<span>ning.ca</span>
          </h1>
        </div>
      </div>
      <SocialFollow />
    </header>
  );
};

export default Header;
