import React from "react";
import "./laurels.css";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const AwardCard = ({ award, title, subTitle }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_image">
      <img src={award} alt="Award" />
    </div>
    <div className="app__laurels_awards-card_content">
      <h4 className="p__cormorand">{title}</h4>
      <p className="p__opensans">{subTitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper app__padding" id="awards">
      <div className="app__wrapper_info app__laurls-content">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards-content">
          {data.awards.map((award, idx) => (
            <AwardCard
              key={idx}
              award={award.imgUrl}
              title={award.title}
              subTitle={award.subtitle}
            />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="Laurels" />
      </div>
    </div>
  );
};

export default Laurels;
