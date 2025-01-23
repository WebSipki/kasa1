//import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel.jsx";
import "../styles/ApartementPage.scss";
import { ImageBanner } from "../components/ImageBanner.jsx";
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";
import { useApartment } from "../hooks/useApartment.jsx";

function ApartmentPage() {
 const flat = useApartment();

if (flat == null) return <div>Loading...</div>;
return (
  <div className="apartement-page">
    <ImageBanner pictures={flat.pictures} />
    <ApartmentHeader flat={flat} />
    <div className="Apartment__description__area"> 
      <DescriptionPanel title="Description" content={flat.description} />
      <DescriptionPanel title="Equipements" 
      content={flat.equipments && flat.equipments.length > 0 ? (
        <ul>
        {flat.equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
        ))}
      </ul>
    ) : (
      "Aucun équipement disponible"
    )
  }
      />
    </div> 
  </div>
    );
}

export default ApartmentPage;