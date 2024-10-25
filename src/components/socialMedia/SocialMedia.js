import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

     
    {socialMediaLinks.facebook ? (
  <a
    href={socialMediaLinks.facebook}
    className="icon-button facebook"  // Updated to 'instagram'
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-facebook"></i>
    <span></span>
  </a>
) : null}
 {socialMediaLinks.instagram ? (
  <a
    href={socialMediaLinks.instagram}
    className="icon-button instagram"  // Updated to 'instagram'
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-instagram"></i>
    <span></span>
  </a>
) : null}





    </div>
  );
}
