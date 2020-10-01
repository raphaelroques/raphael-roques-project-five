import React from "react";
import SocialFollow from "./SocialFollow";
import NavBar from "./NavBar.js";
import logo from "./logo.png";

// Header function component
const Header = (props) => {
  return (
    <header>
      {/* import NavBar component */}
      <NavBar
        cart={props.cart}
        removeItem={props.removeItem}
        countCartItems={props.countCartItems}
      />
      <div className="header-container wrapper">
        <img className="logo" src={logo} alt="" />
        <div className="heading">
          <h1>
            Run<span>ning.ca</span>
          </h1>
        </div>
      </div>
      {/* import SocialFollow component */}
      <SocialFollow />
    </header>
  );
};

export default Header;
