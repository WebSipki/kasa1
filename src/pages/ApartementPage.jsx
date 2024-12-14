import React from "react";
import { DescriptionPanel } from "../components/DescriptionPanel.jsx";
import "../styles/ApartementPage.scss";
import { ImageBanner } from "../components/ImageBanner.jsx";
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";
import { useLocation } from "react-router-dom";


function ApartmentPage() {
  const location = useLocation();
  console.log("location:", location);
    return (
      <div className="apartement-page">
        <ImageBanner />
        <ApartmentHeader />
        <div className="Apartment__description__area"> 
          <DescriptionPanel />
          <DescriptionPanel />
        </div> 
      </div>
    );
}

export default ApartmentPage;