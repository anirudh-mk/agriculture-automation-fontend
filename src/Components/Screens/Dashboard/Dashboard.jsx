// import React, { useEffect, useState } from "react";
// import UserCard from "../../Widgets/UserCard/UserCard";
// import IconButton from "../../Widgets/IconButton/IconButton";
// import { faUsers } from "@fortawesome/free-solid-svg-icons";
// import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { faMessage } from "@fortawesome/free-solid-svg-icons";
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import VegetableCard from "../../Widgets/VegetableCard/VegetableCard";
// import MapCard from "../../Widgets/MapCard/MapCard";
// import MessageCard from "../../Widgets/MessageCard/MessageCard";

// function Dashboard() {
//   const [navigation, setNavigation] = useState("user");

//   const handleUserClick = () => {
//     setNavigation("user");
//   };

//   const handleVegetableClick = () => {
//     setNavigation("vegetable");
//   };

//   const handleMapClick = () => {
//     setNavigation("map");
//   };

//   const handleMessageClick = () => {
//     setNavigation("messages");
//   };
//   return (
//     <>
//       <div className="flex h-screen w-screen">
//         <div className="w-[300px] h-full px-[10px] py-[10px]">
//           <div className="w-full h-full rounded-[10px] bg-white shadow border px-[20px] py-[40px]">
//             <h1 className="text-3xl font-bold text-[#076DFC]">Dashboard</h1>
//             <div className="flex flex-col justify-between h-full">
//               <div className="py-[40px]">
//                 <div className="py-[10px]">
//                   <IconButton
//                     height={50}
//                     backgroundColor="#076DFC"
//                     borderRadius={10}
//                     buttonText="User"
//                     icon={faUsers}
//                     onClick={handleUserClick}
//                   />
//                 </div>
//                 <div className="py-[10px]">
//                   <IconButton
//                     height={50}
//                     backgroundColor="#076DFC"
//                     borderRadius={10}
//                     buttonText="Vegetables"
//                     icon={faPepperHot}
//                     onClick={handleVegetableClick}
//                   />
//                 </div>
//                 <div className="py-[10px]">
//                   <IconButton
//                     height={50}
//                     backgroundColor="#076DFC"
//                     borderRadius={10}
//                     buttonText="Map"
//                     icon={faLocationDot}
//                     onClick={handleMapClick}
//                   />
//                 </div>
//               </div>
//               <div className="py-[40px]">
//                 <div className="py-[10px]">
//                   <IconButton
//                     height={50}
//                     backgroundColor="#076DFC"
//                     borderRadius={10}
//                     buttonText="Messages"
//                     icon={faMessage}
//                     onClick={handleMessageClick}
//                   />
//                 </div>
//                 <div className="py-[10px]">
//                   <IconButton
//                     height={50}
//                     backgroundColor="tomato"
//                     borderRadius={10}
//                     buttonText="Logout"
//                     icon={faRightFromBracket}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 h-screen px-[10px] py-[10px]">
//           {navigation === "user" && <UserCard />}
//           {navigation === "vegetable" && <VegetableCard />}
//           {navigation === "map" && <MapCard />}
//           {navigation === "messages" && <MessageCard />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;

import React from "react";
import UserCardMobile from "../../Widgets/UserCardMobile/UserCardMobile";
import RoundIconButton from "../../Widgets/RoundIconButton/RoundIconButton";

function Dashboard() {
  return (
    <div className="">
      <div className="fixed border-b z-50 bg-white">
        <div className="flex items-center w-screen p-[16px] justify-between">
          <h1 className="text-2xl font-bold">Farmz</h1>
          <img
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt=""
            className="w-[40px] h-[40px] rounded-[40px]"
          />
        </div>
      </div>
      <div className="pt-[90px] pb-[20px]">
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
      </div>
      <RoundIconButton />
    </div>
  );
}

export default Dashboard;
