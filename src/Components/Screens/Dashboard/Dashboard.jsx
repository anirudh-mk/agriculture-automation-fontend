import React, { useState } from "react";
import RoundIconButton from "../../Widgets/RoundIconButton/RoundIconButton";
import User from "../User/User";
import Navbar from "../../Widgets/Navbar/Navbar";
import Vegetable from "../Vegetable/Vegetable";
import Map from "../Map/Map";
import "./Dashboard.css";
import Messages from "../Messages/Messages";

function Dashboard({ handleLogoutClick }) {
  const [navigation, setNavigation] = useState("user");

  const handleUserClick = () => {
    setNavigation("user");
  };
  const handleVegetableClick = () => {
    setNavigation("vegetable");
  };
  const handleMapClick = () => {
    setNavigation("map");
  };
  const handleMessageClick = () => {
    setNavigation("message");
  };
  return (
    <>
      <Navbar
        handleUserClick={handleUserClick}
        handleVegetableClick={handleVegetableClick}
        handleMapClick={handleMapClick}
        handleMessageClick={handleMessageClick}
        handleLogoutClick={handleLogoutClick}
      />
      <div className="dashboard-details-container">
        {navigation === "user" && <User />}
        {navigation === "vegetable" && <Vegetable />}
        {navigation === "map" && <Map />}
        {navigation === "message" && <Messages />}
      </div>
    </>
  );
}

export default Dashboard;
