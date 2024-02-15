import React from "react";

function Navbar() {
  return (
    <div className="fixed border-b z-50 bg-white">
      <div className="flex items-center w-screen p-[16px] justify-between">
        <h1 className="text-2xl font-bold">Farmz</h1>
        <img
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          alt=""
          className="w-[40px] h-[40px] rounded-[40px]"
        />
      </div>
    </div>
  );
}

export default Navbar;
