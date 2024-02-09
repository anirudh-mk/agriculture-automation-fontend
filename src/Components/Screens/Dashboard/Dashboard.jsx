import React from "react";
import UserCard from "../../Widgets/UserCard/UserCard";
import IconButton from "../../Widgets/IconButton/IconButton";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
function Dashboard() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-[300px] h-full px-[10px] py-[10px]">
          <div className="w-full h-full rounded-[10px] bg-white shadow border px-[20px] py-[40px]">
            <h1 className="text-3xl font-bold text-[#076DFC]">Dashboard</h1>
            <div className="flex flex-col justify-between h-full">
              <div className="py-[40px]">
                <div className="py-[10px]">
                  <IconButton
                    height={50}
                    backgroundColor="#076DFC"
                    borderRadius={10}
                    buttonText="User"
                    icon={faUsers}
                  />
                </div>
                <div className="py-[10px]">
                  <IconButton
                    height={50}
                    backgroundColor="#076DFC"
                    borderRadius={10}
                    buttonText="Vegetables"
                    icon={faPepperHot}
                  />
                </div>
                <div className="py-[10px]">
                  <IconButton
                    height={50}
                    backgroundColor="#076DFC"
                    borderRadius={10}
                    buttonText="Map"
                    icon={faLocationDot}
                  />
                </div>
              </div>
              <div className="py-[40px]">
                <div className="py-[10px]">
                  <IconButton
                    height={50}
                    backgroundColor="#076DFC"
                    borderRadius={10}
                    buttonText="Messages"
                    icon={faMessage}
                  />
                </div>
                <div className="py-[10px]">
                  <IconButton
                    height={50}
                    backgroundColor="tomato"
                    borderRadius={10}
                    buttonText="Logout"
                    icon={faRightFromBracket}
                  />
                </div>
              </div>
            </div>
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
