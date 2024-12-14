import React from "react";
import "../styles/ApartmentHeader.scss";

export function ApartmentHeader() {
    return(
        <div className="apartement__header">
        <div className="Apartement__title">
           <h1>Crazy loft on Canal Saint Martin</h1>
           <h2 >Paris, ile de France</h2>
          <div className="apartment__tags">
             <span>Cozy</span>
             <span>Canal</span>
             <span>Paris 10</span>
          </div>
        </div>
        <div className="apartement__owner">
          <div className="apartement__owner__details">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="Apartment__owner__badge"></div>
          </div>
            <div className="Apartment__owner__stars">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="off">★</span>
            <span className="off">★</span>
            </div>
          </div>
        </div>

    );
}
export default ApartmentHeader;