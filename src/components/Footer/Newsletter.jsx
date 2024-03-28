import React from "react";
import "./newsletter.css";
import { SubHeading } from "..";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsltetter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
