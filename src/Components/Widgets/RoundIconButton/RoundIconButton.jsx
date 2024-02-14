import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function RoundIconButton() {
  return (
    <div className="fixed bottom-[24px] right-[24px] w-[50px] h-[50px] bg-[tomato] rounded-[25px] flex justify-center items-center">
      <FontAwesomeIcon icon={faPlus} size="xl" color="white"></FontAwesomeIcon>
    </div>
  );
}

export default RoundIconButton;
