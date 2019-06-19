import React from 'react';
import './../layout.css';

import logo from './../images/placeholderLogo.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faTwitterSquare, faInstagram, faPinterestSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className="Footer">

    <div className="footerLeft">
      <div className="footerLeftLeft">
        <h3>TomaBaits</h3>
        <p>Fishing at it's best</p>
      </div>
      <div className="footerLeftRight">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="socialMediaFooter" />
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="socialMediaFooter" />
        <FontAwesomeIcon icon={faInstagram} size="2x" className="socialMediaFooter" />
        <FontAwesomeIcon icon={faPinterestSquare} size="2x" className="socialMediaFooter" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="socialMediaFooter" />
      </div>
    </div>
    <div className="footerRight">
        <div className="footerRightLeft">
          <h3>Contact: </h3>
          <p>Phone number: 1234567890</p>
          <p>Email Address: tomabaitsro@gmail.ro</p>
        </div>
        <div className="footerRightRight">
          <p>Home</p>
          <p>Contact</p>
          <p>Gallery</p>
          <p>Products</p>
          <p>AboutUs</p>
        </div>
    </div>

    </div>
  );
}

export default Footer;
