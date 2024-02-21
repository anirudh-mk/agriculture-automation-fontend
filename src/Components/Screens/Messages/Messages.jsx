import React, { useState } from "react";
import "./Messages.css";
import RoundIconButton from "../../Widgets/RoundIconButton/RoundIconButton";
import MessageDetailsCard from "../../Widgets/MessageDetailsCard/MessageDetailsCard";

function Messages() {
  const [createMessage, setCreateMessage] = useState(false);

  const handleMessageCreate = () => {
    setCreateMessage(true);
  };

  const handleCancel = () => {
    setCreateMessage(false);
  };

  const handleCreate = () => {
    setCreateMessage(false);
  };
  return (
    <div className="message-container">
      {createMessage ? (
        <div className="create-message-container">
          <p>Title</p>
          <input type="text" />
          <br />
          <p>Context</p>
          <input type="text" />
          <br />
          <div className="buttons-container">
            <div onClick={handleCancel} className="cancel-button">
              <p>Cancel</p>
            </div>
            <div onClick={handleCreate} className="create-button">
              <p>Send</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <MessageDetailsCard />
          <RoundIconButton onClick={handleMessageCreate} />
        </div>
      )}
    </div>
  );
}

export default Messages;
