import React from "react";

function UserCardMobile() {
  return (
    <div className="py-[10px] px-[16px]">
      <div className="px-[16px] py-[16px] w-full border rounded-[5px]">
        <div className="grid grid-cols-[80px_auto] gap-[30px]">
          <div className="flex items-center justify-center">
            <img src="" alt="" className="w-[40px] h-[40px] rounded-[40px]" />
          </div>
          <div className="px-[10px] items-center">
            <h1 className="text-lg font-bold">Anirudh MK</h1>
            <p className="text-lg font-semibold">Farm name</p>
            <p className="text-lg font-semibold">Kerala</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCardMobile;
