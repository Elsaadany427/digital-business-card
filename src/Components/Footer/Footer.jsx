import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/xdelmo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/emanueledelmonte/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
      </a>
      <a
        href="https://www.facebook.com/in/emanueledelmonte/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="footer--icon" />
      </a>
      <a
        href="https://www.telegram.com/in/emanueledelmonte/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTelegram} className="footer--icon" />
      </a>
    </div>
  );
}