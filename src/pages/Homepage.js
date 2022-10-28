import React from "react";
import Slideshow from "../components/Slideshow";
import Introcomponent from "../components/Introcomponent";
import Trading from "../components/Trading";
const Homepage = () => {
  return (
    <div>
      <Slideshow />
      <Introcomponent />
      <Trading />
    </div>
  );
};

export default Homepage;
