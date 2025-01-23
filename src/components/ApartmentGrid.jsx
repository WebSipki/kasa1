import React from "react";
import "../styles/ApartmentGrid.scss";
import Apartment from "../components/Apartment.jsx";
import { useApartments } from "../hooks/useApartments.jsx";

function ApartmentGrid() {
  const apartments = useApartments();
    

  // Ajout de return ici
    return (
     <div className="grid">
      {apartments.map((apartment) => (
        <Apartment 
        title={apartment.title} 
        imageUrl={apartment.cover} 
        id={apartment.id} 
        key={apartment.id}/>
      ))}
    </div>
  ); 
}

export default ApartmentGrid;
