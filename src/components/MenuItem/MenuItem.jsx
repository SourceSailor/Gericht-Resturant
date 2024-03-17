import React from "react";
import "./menuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="menuItem__container">
      <div className="menuItem__title-Price">
        <div className="menuItem__title">{title}</div>
        <div className="menuItem__separator">
          <span></span>
        </div>
        <div className="menuItem__price">{price}</div>
      </div>
      <div className="menuItem__description p__opensans ">{tags}</div>
    </div>
  );
};

export default MenuItem;
