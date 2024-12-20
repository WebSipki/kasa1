import React from "react";
import "../styles/ImageBanner.scss";

export function ImageBanner(props) {
    return(
       <div className="Image__banner">
          <img src={props.imageUrl} alt="" />
       </div>
    );
}