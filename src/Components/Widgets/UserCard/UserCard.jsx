import React from "react";
import DetailsCardContainer from "../DetailsCardContainer/DetailsCardContainer";

function UserCard() {
  return (
    <div className="flex flex-col border w-full h-full rounded-[10px] bg-white shadow">
      <div className="flex justify-between items-center w-full px-[20px] py-[20px]">
        <h1 className="text-2xl font-bold text-[#076DFC]">User</h1>
        <button
          type="button"
          class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Extra small
        </button>
      </div>
      <div className="w-full px-[20px] py-[40px]">
        <DetailsCardContainer />
      </div>
    </div>
  );
}

export default UserCard;
