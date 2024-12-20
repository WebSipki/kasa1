/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../styles/ApartmentGrid.scss";
import Apartment from "../components/Apartment.jsx";


function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Données invalides : le JSON n'est pas un tableau.");
        }
        setApartments(data);
      })
      .catch((error) => console.error("Erreur lors de la récupération des données :", error));
  }, []);

  // Ajout de return ici
    return (
     <div className="grid">
      {apartments.map((apartment) => (
        <Apartment title={apartment.title} imageUrl={apartment.cover} key={apartment.id}/>
      ))}
    </div>
  ); 
}

export default ApartmentGrid;
