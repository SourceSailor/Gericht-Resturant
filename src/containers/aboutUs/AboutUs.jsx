import React from "react";
import "./aboutUs.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const AboutUs = () => {
  return (
    <div
      className="app__aboutUs section__padding app__bg flex__center"
      id="about"
    >
      <div className="app__aboutUs-overlay flex__center">
        <img className="gImage" src={images.G} alt="G letter" />
        <div className="app__aboutUs-content flex__center">
          {/* ABOUT US SECTION */}
          <div className="app__aboutUs-content_about">
            <SubHeading title="About Us" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <button type="button" className="custom__button">
              Know More
            </button>
          </div>

          {/*  KNIFE IMAGE */}
          <div className="app__aboutUs-content_knife flex__center">
            <img src={images.knife} alt="Knife" />
          </div>

          {/* OUR HISTORY SECTION */}
          <div className="app__aboutUs-content_history">
            <SubHeading title="Our History" />
            <p className="p__opensans">
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
              Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </p>
            <button type="button" className="custom__button">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
