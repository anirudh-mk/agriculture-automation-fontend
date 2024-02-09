import React from "react";
import DetailsCardContainer from "../DetailsCardContainer/DetailsCardContainer";

function UserCard() {
  return (
    <div className="flex flex-col border w-full h-full rounded-[10px] bg-white shadow">
      <div className="flex justify-between items-center w-full px-[40px] py-[40px]">
        <h1 className="text-3xl font-bold text-[#076DFC]">User</h1>
        <button
          type="button"
          class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Extra small
        </button>
      </div>
      <div className="px-[40px] py-[40px]">
        <div className="w-full py-[20px] ">
          <div className="text-xl font-semibold">
            <div className="grid grid-cols-5 items-center">
              <p className="px-[40px]">Sl.No</p>
              <p className="px-[10px]">Username</p>
              <p className="px-[10px]">Farm Name</p>
              <p className="px-[10px]">Location</p>
              <input type="text" className="w-full h-[40px] rounded-[40px]" />
            </div>
          </div>
        </div>
        <DetailsCardContainer />
      </div>
    </div>
  );
}

export default UserCard;
