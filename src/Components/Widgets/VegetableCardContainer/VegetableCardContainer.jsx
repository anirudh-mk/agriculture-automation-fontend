import React from "react";

function VegetableCardContainer() {
  return (
    <div className="w-full py-[20px] border shadow-md bg-white rounded-lg">
      <div className="text-xl font-semibold">
        <div className="grid grid-cols-5 ">
          <p className="px-[60px]">1</p>
          <p className="px-[10px]">Tomato</p>
          <div className="flex justify-around px-[20px]">
            <p className="px-[10px]">45</p>
            <p className="px-[10px]">60</p>
            <p className="px-[10px]">22</p>
          </div>
          <p className="px-[20px]">42 days</p>
          <div className="flex px-[10px] justify-between">
            <img src="" alt="" className="w-[30px] h-[30px] border" />
            <div className="w-[20px] h-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VegetableCardContainer;
