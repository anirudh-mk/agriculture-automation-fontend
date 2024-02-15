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
    <div className="fixed border-b z-40 bg-white">
      <div className="flex items-center w-screen p-[16px] justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBars} size="lg" onClick={openSidebar} />
          <h1 className="text-2xl font-bold px-[10px]">Farmz</h1>
        </div>
        <img
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          alt=""
          className="w-[40px] h-[40px] rounded-[40px]"
        />
      </div>
      <div
        className={`bg-white h-full fixed top-0 w-[250px] left-0 z-50 border-r sidebarx ${
          isSidebarOpen ? "open" : ""
        }`}
      >
        <div className="flex w-full justify-end p-[16px]">
          <FontAwesomeIcon icon={faClose} size="xl" onClick={closeSlidebar} />
        </div>
        <div className="px-[16px] py-[16px]">
          <div
            className="flex items-center px-[10px] py-[10px] rounded-[10px] animation my-[5px]"
            onClick={handleUserClick}
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
            <p className=" text-[20px] font-semibold px-[20px]">User</p>
          </div>
          <div
            className="flex items-center px-[10px] py-[10px] rounded-[10px] animation my-[5px]"
            onClick={handleVegetableClick}
          >
            <FontAwesomeIcon icon={faPepperHot} size="lg" />
            <p className=" text-[20px] font-semibold px-[20px]">Vegetabales</p>
          </div>
          <div
            className="flex items-center px-[10px] py-[10px] rounded-[10px] animation my-[5px]"
            onClick={handleMapClick}
          >
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
            <p className=" text-[20px] font-semibold px-[20px]">Map</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
