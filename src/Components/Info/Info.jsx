import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Info.css"

export default function Info() {
  return (
    <div className="info">
      <div className="info--photo">
        <img src="src/assets/me.jpeg" alt="hatem photo" />
      </div>
      <h1 className="info--title">Hatem Elsaadany</h1>
      <h4 className="info-role">Junior Front End Developer</h4>
      <p className="info--website">
        <a
          href="https://www.emanueledelmonte.it"
          target="_blank"
          rel="noopener noreferrer"
          className="info--website_link"
        >
          emanueledelmonte.it
        </a>
      </p>
      <div className="info--buttons">
        <button className="button button--email">
          <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
          Email
        </button>
        <button className="button button--linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
