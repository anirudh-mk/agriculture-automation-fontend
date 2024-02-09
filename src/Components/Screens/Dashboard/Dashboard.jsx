import React from "react";
import UserCard from "../../Widgets/UserCard/UserCard";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-[300px] h-full px-[10px] py-[10px]">
          <div className="border w-full h-full rounded-[10px] bg-white shadow px-[20px] py-[20px]">
            <h1 className="text-2xl font-bold text-[#076DFC]">Dashboard</h1>
          </div>
        </div>
        <div className="flex-1 h-screen px-[10px] py-[10px]">
          <UserCard />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
