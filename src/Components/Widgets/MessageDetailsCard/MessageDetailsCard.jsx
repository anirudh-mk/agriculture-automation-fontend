import React from "react";
import "./MessageDetailsCard.css";
export default function MessageDetailsCard() {
  return (
    <div className="message-details-card">
      <div className="details-container">
        <div className="grid-container">
          <div className="image-container">
            <img
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              alt=""
            />
          </div>
          <div className="details">
            <h1>Ajay</h1>
            <p>Problem with data</p>
            <p>I facing issue about the probe of the sensor is not working </p>
          </div>
        </div>
      </div>
    </div>
  );
}
