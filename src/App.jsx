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

import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <FindUs />
      <Footer />
      <Gallery />
      <Intro />
      <Laurels />
      <Footer />
    </>
  );
}

export default App;
