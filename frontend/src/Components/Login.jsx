import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import "../Components/Module.style.css/Login.css";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  return [visible, toggleVisibility];
};

const Login = () => {
  const [passwordVisible, togglePasswordVisibility] = usePasswordToggle();
  const [confirmPasswordVisible, toggleConfirmPasswordVisibility] = usePasswordToggle();

  return (
    <div className="register-container">
      <form className="register-form">
        <h2 className="heading">login</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <div className="input-icon">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              required
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ?  <FaEye/> : <IoIosEyeOff/>}
            </span>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="input-icon">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirm-password"
              required
            />
            <span
              className="toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? <FaEye/>: <IoIosEyeOff/>}
            </span>
          </div>
        </div>
        <button type="submit" className="register-button">
          Login
        </button>
        <div className="login-container">
          <span>
            Already have an account? <Link to="/register">Create Account</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;


