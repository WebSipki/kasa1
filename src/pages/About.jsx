import React from "react";
import  { DescriptionPanel } from "../components/DescriptionPanel.jsx";
import { ImageBanner } from "../components/ImageBanner.jsx";
import "../styles/About.scss";

function About(){
  return (
    <>
      <ImageBanner />
      <div className="about__container">
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </>
  );
}
  


export default About;