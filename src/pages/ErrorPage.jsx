import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../styles/ErrorPage.scss";

function ErrorPage(){
  return (
    <>
      <Navbar />
        <div className="error-page">
          <h1>404</h1>
          <h2>Oops! La page que vous demandez n'existe pas.</h2>
         <Link to="/">Retourner sur la page d'accueil</Link>
       </div>
    </>
  );
};

export default ErrorPage;
