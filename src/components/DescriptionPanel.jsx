import React from "react";
import "../styles/DescriptionPanel.scss";

export function DescriptionPanel() {
    return(
        <div className="description__panel">
          <p className="description__title">
             <span>Description</span>
             <i className="fas fa-chevron-up"></i>
          </p>

          <p className="description__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea quo fugiat dolor debitis eos expedita alias voluptatibus, 
            optio omnis obcaecati quos aperiam autem accusamus necessitatibus,
            placeat numquam, maxime et architecto.
          </p>
        </div>
    );
}
export default DescriptionPanel;