import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ handleUserClick, handleVegetableClick, handleMapClick }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSlidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="navbar">
      <div className="headdings-items">
        <div className="headding">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            onClick={openSidebar}
            className="toggle-icon"
          />
          <h1>Farmz</h1>
        </div>
        <img
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          alt=""
        />
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="items">
          <FontAwesomeIcon
            icon={faClose}
            size="xl"
            onClick={closeSlidebar}
            className="close-button"
          />
        </div>
        <div className="inner-container">
          <div className="button" onClick={handleUserClick}>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <p>User</p>
          </div>
          <div className="button" onClick={handleVegetableClick}>
            <FontAwesomeIcon icon={faPepperHot} size="lg" />
            <p>Vegetabales</p>
          </div>
          <div className="button" onClick={handleMapClick}>
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
            <p>Map</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
