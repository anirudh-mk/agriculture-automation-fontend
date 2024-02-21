import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import "./Navbar.css";
import IconButton from "../IconButton/IconButton";

function Navbar({
  handleUserClick,
  handleVegetableClick,
  handleMapClick,
  handleMessageClick,
  handleLogoutClick,
}) {
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
          <div>
            <IconButton icon={faUser} text="User" onClick={handleUserClick} />
            <IconButton
              icon={faPepperHot}
              text="Vegetables"
              onClick={handleVegetableClick}
            />
            <IconButton
              icon={faMapLocationDot}
              text="Map"
              onClick={handleMapClick}
            />
          </div>
          <div>
            <IconButton
              icon={faMessage}
              text="Messages"
              onClick={handleMessageClick}
            />
            <IconButton
              icon={faClose}
              text="Logout"
              onClick={handleLogoutClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
