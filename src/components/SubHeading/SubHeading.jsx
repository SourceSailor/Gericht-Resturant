import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="app__subHeading-p p__cormorant">{title}</p>
      <img src={images.spoon} alt="Spoon image" className="spoon__image" />
    </div>
  );
};

export default SubHeading;
