import React from "react";
import web from "./images/bg2.png";
import Commen from "./Commen";

const About = () => {
  return (
    <>
      <Commen
        name="Welcome,to About Us "
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        lifename="Business Page "
      />
    </>
  );
};
export default About;
