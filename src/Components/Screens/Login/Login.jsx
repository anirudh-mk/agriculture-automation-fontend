import React from "react";
import styles from "./Login.module.css";
import loginScreenImage from "../../../assets/icons/loginScreenImage.png";
function Login({ onClick }) {
  return (
    <div className={styles.login}>
      <div className={styles.details_container}>
        <div className={styles.image_container}>
          <img src={loginScreenImage} alt="" />
        </div>
        <div className={styles.login_details_container}>
          <h1>Hey Welcome Back</h1>
          <p>Username</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" name="" id="" />
          <br />
          <br />
          <div className={styles.buttons_container}>
            <div className={styles.login_button}>
              <p>Login</p>
            </div>
            <div className={styles.signup_button} onClick={onClick}>
              <p>SignUp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
