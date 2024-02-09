import React from "react";
import IconButton from "../IconButton/IconButton";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import VegetableCardContainer from "../VegetableCardContainer/VegetableCardContainer";

function VegetableCard() {
  return (
    <div className="flex flex-col border w-full h-full rounded-[10px] bg-white shadow">
      <div className="flex justify-between items-center w-full px-[40px] py-[40px]">
        <h1 className="text-3xl font-bold text-[#076DFC]">Vegetables</h1>
        <IconButton
          width={120}
          height={40}
          buttonText="create"
          icon={faCirclePlus}
        />
      </div>
      <div className="px-[40px] py-[40px]">
        <div className="w-full py-[20px] ">
          <div className="text-xl font-semibold">
            <div className="grid grid-cols-5 items-center">
              <p className="px-[40px]">Sl.No</p>
              <p className="px-[10px]">Name</p>
              <div className="flex justify-around px-[20px]">
                <p className="px-[10px]">N</p>
                <p className="px-[10px]">P</p>
                <p className="px-[10px]">K</p>
              </div>
              <p className="px-[20px]">Time Required</p>
              <input type="text" className="w-full h-[35px] rounded-[40px]" />
            </div>
          </div>
        </div>
        <VegetableCardContainer />
      </div>
    </div>
  );
}

export default VegetableCard;
