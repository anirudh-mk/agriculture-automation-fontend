import React from "react";
import IconButton from "../IconButton/IconButton";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function MessageCard() {
  return (
    <div className="flex flex-col border w-full h-full rounded-[10px] bg-white shadow">
      <div className="flex justify-between items-center w-full px-[40px] py-[40px]">
        <h1 className="text-3xl font-bold text-[#076DFC]">Messages</h1>
        <IconButton
          width={120}
          height={40}
          buttonText="create"
          icon={faCirclePlus}
        />
      </div>
    </div>
  );
}

export default MessageCard;
