import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
// Outlets pour afficher certaines parties de la page
// Dans une application complexe, on peut décider d’afficher certaines 
// parties de la page en fonction de la route que nous avons prise. //
import Home from "../pages/Home.jsx";
import ApartementPage from "../pages/ApartementPage.jsx";
import About from "../pages/About.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../layout/Footer.jsx";
import Main from "../layout/Main.jsx";

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const Router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />, // Page à afficher en cas d'erreur (404)
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/flat",
        element: <ApartementPage />
      },
      {
        path: "/about",
        element: <About />
      },
     
    ],
  },
]);

export default Router;