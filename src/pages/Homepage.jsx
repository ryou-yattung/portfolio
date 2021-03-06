import React from "react";
import About from "./Homepage/About";
import MyView from "./Homepage/MyView";
import Challenge from "./Homepage/Challenge";
import Work from "./Homepage/Work";

const Homepage = () => {
  return (
    <>
      <MyView />
      <About />
      <Challenge />
      <Work />
    </>
  );
};

export default Homepage;
