import React from "react";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-[300px] h-full px-[10px] py-[10px]">
          <div className="border w-full h-full rounded-[10px] bg-white shadow">
            <h1 className="text-2xl font-bold px-[20px] py-[20px] text-[#076DFC]">
              Dashboard
            </h1>
          </div>
        </div>
        <div className="flex-1 h-screen px-[10px] py-[10px]">
          <div className="border w-full h-full rounded-[10px] bg-white shadow"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
