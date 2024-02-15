import React, { useState } from "react";
import UserCardMobile from "../../Widgets/UserCardMobile/UserCardMobile";
import RoundIconButton from "../../Widgets/RoundIconButton/RoundIconButton";

function User() {
  const [createUser, setCreateUser] = useState(false);

  const handleUserCreate = () => {
    setCreateUser(true);
  };

  const handleCancel = () => {
    setCreateUser(false);
  };

  const handleCreate = () => {
    setCreateUser(false);
  };

  return (
    <div className="pt-[90px] pb-[20px]">
      {createUser ? (
        <div className="flex flex-col px-[20px]">
          <p className="text-[20px] font-semibold pb-[10px]">First Name</p>
          <input type="text" className="rounded-[10px]" />
          <br />
          <p className="text-[20px] font-semibold pb-[10px]">Last Name</p>
          <input type="text" className="rounded-[10px]" />
          <br />
          <p className="text-[20px] font-semibold pb-[10px]">Email</p>
          <input type="text" className="rounded-[10px]" />
          <br />
          <p className="text-[20px] font-semibold pb-[10px]">Phone</p>
          <input type="text" className="rounded-[10px]" />
          <br />
          <p className="text-[20px] font-semibold pb-[10px]">Username</p>
          <input type="text" className="rounded-[10px]" />
          <br />
          <p className="text-[20px] font-semibold pb-[10px]">Password</p>
          <input type="password" className="rounded-[10px]" />
          <br />
          <p className="text-[20px] font-semibold pb-[10px]">
            Confirm Password
          </p>
          <input type="password" className="rounded-[10px]" />
          <br />
          <div className="flex justify-end ">
            <div
              onClick={handleCancel}
              className="flex justify-center items-center w-[80px] h-[40px] border rounded-[10px] mx-[10px]"
            >
              <p className="text-[18px] font-semibold">Cancel</p>
            </div>
            <div
              onClick={handleCreate}
              className="flex justify-center items-center w-[80px] h-[40px] bg-[tomato] rounded-[10px] mx-[10px]"
            >
              <p className="text-[18px] font-semibold text-white">Create</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <UserCardMobile />
          <UserCardMobile />
          <UserCardMobile />
          <UserCardMobile />
          <UserCardMobile />
          <UserCardMobile />
          <UserCardMobile />
          <UserCardMobile />
          <UserCardMobile />
          <UserCardMobile />
          <RoundIconButton onClick={handleUserCreate} />
        </div>
      )}
    </div>
  );
}

export default User;
