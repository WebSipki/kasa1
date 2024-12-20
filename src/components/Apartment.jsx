import React from "react";
import { Link } from "react-router-dom";
import "../styles/Apartment.scss";

function Apartment(props) {
  //const state = {
   // apartmentId: props.id
    //};
   return (
        <Link to="/flat" state={{
          apartmentId:props.id
        }}
        >
          <div className="apartment">
            <img src={props.imageUrl} alt="" />
             <div className="apartment__subtitle">{props.title}</div>
          </div>
        </Link>
           
    ); 
}
export default Apartment;