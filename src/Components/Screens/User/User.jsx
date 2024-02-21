import React, { useState } from "react";
import UserDetailsCard from "../../Widgets/UserDetailsCard/UserDetailsCard";
import RoundIconButton from "../../Widgets/RoundIconButton/RoundIconButton";
import "./User.css";
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
    <div className="user-container">
      {createUser ? (
        <div className="create-user-container">
          <p>First Name</p>
          <input type="text" />
          <br />
          <p>Last Name</p>
          <input type="text" />
          <br />
          <p>Email</p>
          <input type="text" />
          <br />
          <p>Phone</p>
          <input type="text" />
          <br />
          <p>Username</p>
          <input type="text" />
          <br />
          <p>Password</p>
          <input type="password" />
          <br />
          <p>Confirm Password</p>
          <input type="password" />
          <br />
          <div className="buttons-container">
            <div onClick={handleCancel} className="cancel-button">
              <p>Cancel</p>
            </div>
            <div onClick={handleCreate} className="create-button">
              <p>Create</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <UserDetailsCard />
          <RoundIconButton onClick={handleUserCreate} />
        </div>
      )}
    </div>
  );
}

export default User;
