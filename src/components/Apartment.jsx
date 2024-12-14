import React from "react";
import { Link } from "react-router-dom";
import "../styles/Apartment.scss";

function Apartment(props) {
  const link = {
    pathname: "/flat",
    state: {
      userId: "ben"
    }
  };

    return (
        <Link to={link}>
          <div className="apartment">
            <img src={props.imageUrl} alt="" />
             <div className="apartment__subtitle">{props.title}</div>
          </div>
        </Link>
           
    ); 
}
export default Apartment;