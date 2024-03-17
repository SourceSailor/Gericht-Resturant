import React from "react";
import "./specialMenu.css";
import { images, data } from "../../constants";
import { MenuItem, SubHeading } from "../../components";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        {/* WINE SECTION */}

        <div className="app__specialMenu-menu_wine ">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, idx) => (
              <MenuItem
                key={idx}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        {/* SHAKER IMAGE */}
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu image" />
        </div>

        {/* COCKTAIL SECTION */}
        <div className="app__specialMenu-menu_cocktails ">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, idx) => (
              <MenuItem
                key={idx}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "15px" }}
      >
        View More
      </button>
    </div>
  );
};

export default SpecialMenu;
