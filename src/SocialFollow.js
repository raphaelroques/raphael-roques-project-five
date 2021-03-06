import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// SocialFollow function component
const SocialFollow = () => {
  return (
    <div className="social-container">
      <h3>Follow Running.ca on social media:</h3>
      <a href="https://www.youtube.com/" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <span class="sr-only">visit Running.ca on youtube</span>
      </a>
      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <span class="sr-only">visit Running.ca on facebook</span>
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <span class="sr-only">visit Running.ca on twitter</span>
      </a>
      <a href="https://www.instagram.com/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <span class="sr-only">visit Running.ca on instagram</span>
      </a>
    </div>
  );
};

export default SocialFollow;
