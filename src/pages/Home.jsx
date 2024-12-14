import React from "react";
import "../styles/Home.scss";
import Banner from "../layout/Banner.jsx";
import ApartmentGrid from "../components/ApartmentGrid.jsx";

function Home() {
  return(
    <>
      <Banner />
      <ApartmentGrid />
      
    </>
  ); 
}

export default Home;