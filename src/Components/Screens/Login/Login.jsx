import React from "react";
import "./Login.css";
function Login({ onClick }) {
  return (
    <div className="login">
      <div className="details-container">
        <div className="image-container">
          <img src="" alt="" />
        </div>
        <div className="login-details-container">
          <h1>Hey Welcome Back</h1>
          <p>Username</p>
          <input type="text" />
          <p>Password</p>
          <input type="text" name="" id="" />
          <br />
          <br />
          <div className="buttons-container">
            <div className="login-button">
              <p>Login</p>
            </div>
            <div className="signup-button" onClick={onClick}>
              <p>SignUp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
