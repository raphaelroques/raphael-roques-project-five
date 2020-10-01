import React from "react";
import SocialFollow from "./SocialFollow";

// footer function component
const Footer = () => {
  return (
    <footer>
      <div className="footer-bot-container">
        <p>
          created by Raphael Roques at{" "}
          <a className="juno" href="https://junocollege.com/">
            Juno
          </a>
        </p>
      </div>
      <SocialFollow />
    </footer>
  );
};

export default Footer;
