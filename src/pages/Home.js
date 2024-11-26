import React from "react";
import logements from "../data/logements.json";

const Home = () => {
  return (
    <div>
      <h1>ListeSDR des logements</h1>
      <div>
        {logements.map((logement) => (
          <div key={logement.id}>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;