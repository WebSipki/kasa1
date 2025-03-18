import React from "react";
import "../styles/ApartmentHeader.scss";

export function ApartmentHeader(props) {
  const flat = props.flat || {};
  const host = flat.host || {};
  const name = typeof host.name === "string" ? host.name : "";

  const [firstName = "", lastName = ""] = name.split(" ");

    return(
        <div className="apartement__header">
        <div className="Apartement__title">
           <h1>{flat.title}</h1>
           <h2>{flat.location}</h2>
          <div className="apartment__tags">
            {(flat.tags || []).map((tag) => ( 
            <span key={tag}>{tag}</span>
          ))}
          </div>
        </div>
        <div className="apartement__owner">
          <div className="apartement__owner__details">
            <h3>
              <span>{firstName}</span>
              <span>{lastName}</span>
            </h3>
            <div className="Apartment__owner__badge">
              <img src={host.picture} alt="" />
            </div>
          </div>
            <div className="Apartment__owner__stars">
              {[1, 2, 3, 4, 5].map((num) => (
                <span key={num}className={props.flat.rating >= num ? "on" : ""}>★</span>
              ))}
            </div>
          </div>
        </div>

    );
}
export default ApartmentHeader;
