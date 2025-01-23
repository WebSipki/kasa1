import React from "react";
import  { DescriptionPanel } from "../components/DescriptionPanel.jsx";
import { ImageBanner } from "../components/ImageBanner.jsx";
import "../styles/About.scss";

function About(){
  return (
    <>
      <ImageBanner />
      <div className="about__container">
        <DescriptionPanel title="Fiabilité" content="C'est très important" />
        <DescriptionPanel title="Respect" content="C'est très important" />
        <DescriptionPanel title="Service" content="C'est très important" />
        <DescriptionPanel title="Securité" content="C'est très important" />
      </div>
    </>
  );
}
  


export default About;