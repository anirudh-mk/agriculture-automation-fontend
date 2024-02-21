import React from "react";
import "./VegetableDetailsCard.css";
function VegetableDetailsCard() {
  return (
    <div className="vegetable-details-card">
      <div className="details-container">
        <div className="grid-container">
          <div className="image-container">
            <img
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt=""
            />
          </div>
          <div className="details">
            <h1>Tomato</h1>
            <p>Farm name</p>
            <p>Kerala</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VegetableDetailsCard;
