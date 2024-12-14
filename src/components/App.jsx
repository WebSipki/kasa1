import React from "react";
import "./App.scss";
import NavLink from "./Navbar.jsx";
import Banner from "./layout/Banner.jsx";
import Footer from "./layout/Footer.jsx";
import ApartmentGrid from "./ApartmentGrid.jsx";
import Main from "./layout/Main.jsx";

function App() {
  return (
    <>
      <NavLink />
      <Main>
        <Banner />
       <ApartmentGrid />
      </Main>
      <Footer />
   </>
  );
}

export default App;
