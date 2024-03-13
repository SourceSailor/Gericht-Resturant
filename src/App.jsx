import { useState } from "react";
import React from "react";
import "./App.css";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./containers";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <AboutUs />
      <Chef />
      <FindUs />
      <Footer />
      <Gallery />
      <Header />
      <Intro />
      <Laurels />
      <SpecialMenu />
    </>
  );
}

export default App;
