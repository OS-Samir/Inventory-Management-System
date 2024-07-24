

import React, { useState } from "react"; // Import necessary React hooks
import { Link } from "react-router-dom";  // Import Link for navigation
import { FaEye } from "react-icons/fa"; // Import eye icon for showing password
import { IoIosEyeOff } from "react-icons/io"; // Import eye-off icon for hiding password
import "../Components/Module.style.css/Register.css"; // Import CSS for styling
import axios from 'axios'; // Import axios for making HTTP requests

// Custom hook to toggle password visibility
const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  return [visible, toggleVisibility];
};

const Register = () => {
  // State variables for toggling visibility of passwords
  const [passwordVisible, togglePasswordVisibility] = usePasswordToggle();
  const [confirmPasswordVisible, toggleConfirmPasswordVisibility] = usePasswordToggle();

  // State variables for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => { 
    e.preventDefault(); // Prevent default form submission
    if (password !== confirmPassword) {
      alert("Passwords do not match!"); // Check if passwords match
      return;
    }
    // Make POST request to register endpoint
    axios.post('http://localhost:8000/Register', { username, email, password })
      .then(result => console.log(result)) // Log the result on success
      .catch(err => console.log(err)); // Log the error on failure

  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="heading">Register</h2>

        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            required 
            onChange={e => setUsername(e.target.value)} 
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            autoComplete="email"
            onChange={e => setEmail(e.target.value)} 
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <div className="input-icon">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              required
              onChange={e => setPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye /> : <IoIosEyeOff />}
            </span>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="confirm-password">
            Confirm Password
          </label>
          <div className="input-icon">
            <input
              type={confirmPasswordVisible ? "text" : "password"} // Toggle confirm password visibility
              name="confirm-password"
              required
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            >
             
              {confirmPasswordVisible ? <FaEye /> : <IoIosEyeOff />} 
            </span>
          </div>
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
        <div className="login-container">
          <span>
            Already have an account? <Link to="/login">Login</Link> 
            </span>
        </div>
      </form>
    </div>
  );

  };
export default Register; 


