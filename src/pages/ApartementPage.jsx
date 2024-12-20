import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel.jsx";
import "../styles/ApartementPage.scss";
import { ImageBanner } from "../components/ImageBanner.jsx";
import { ApartmentHeader } from "../components/ApartmentHeader.jsx";
import { useLocation } from "react-router-dom";


function ApartmentPage() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);
  console.log("flat:", flat);
  useEffect(fetcApartmentData, [location.state.apartmentId]);
  
function fetcApartmentData () {
  fetch("/logements.json")
  .then((res) => {
    console.log("Réponse brute : ", res);
    return res.json();
  })
  .then((data) => {
    console.log("Données reçues : ", data);
    if (!Array.isArray(data)) {
      console.error("Les données reçues ne sont pas un tableau :", data);
      return;
    }

    const flat = data.find((flat) => flat.id === location.state.apartmentId);
    setFlat(flat);
  })
  .catch(console.error);
}
if (flat == null) return <div>Loading...</div>;
return (
  <div className="apartement-page">
    <ImageBanner imageUrl={flat.cover} />
    <ApartmentHeader flat={flat} />
    <div className="Apartment__description__area"> 
      <DescriptionPanel title="Description" content={flat.description} />
      <DescriptionPanel
          title="Equipements"
          content={flat.equipements && flat.equipements.length > 0 ? (
            flat.equipements.map((eq, index) => <li key={index}>{eq}</li>)) : (
            <p>Aucun équipement disponible</p>
          )}
      />
    </div> 
  </div>
    );
}

export default ApartmentPage;