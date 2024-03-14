import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="Spoon" className="spoon__image" />
    </div>
  );
};

export default SubHeading;
