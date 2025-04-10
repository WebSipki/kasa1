import React from "react";
import  { DescriptionPanel } from "../components/DescriptionPanel.jsx";
import { ImageBanner } from "../components/ImageBanner.jsx";
import "../styles/About.scss";

function About(){
  return (
    <>
      <ImageBanner />
      <div className="about__container">
        <DescriptionPanel title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        <DescriptionPanel title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <DescriptionPanel title="Service" content="La qualité du service est coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
        <DescriptionPanel title="Securité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité dormestique pour nos hôtes. " />
      </div>
    </>
  );
}
  


export default About;