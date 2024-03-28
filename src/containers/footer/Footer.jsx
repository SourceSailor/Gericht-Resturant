import React from "react";
import "./footer.css";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-content__section">
        <div className="app__footer-content">
          <h4 className="app__footer-content-headtext">Contact Us</h4>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>
            +1 212-344-1230 <br /> +1 212-555-1230
          </p>
        </div>
        <div className="app__footer-content">
          <img src={images.gericht} alt="" />
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={images.spoon} alt="" />
          <div className="app__footer-content__social-icons">
            <FiFacebook style={{ marginRight: "1rem" }} />
            <FiTwitter style={{ marginRight: "1rem" }} />
            <FiInstagram style={{ marginRight: "1rem" }} />
          </div>
        </div>
        <div className="app__footer-content">
          <h4 className="app__footer-content-headtext">Working Hours</h4>
          <p>
            Monday-Friday:
            <br />
            08:00 am -12:00 am
          </p>
          <p>
            Saturday-Sunday: <br /> 07:00am -11:00 pm
          </p>
        </div>
      </div>
      <div className="app__footer-content__copyright">
        <p>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
