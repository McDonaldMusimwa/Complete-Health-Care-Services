import React, { useState } from "react";
import axios from "axios";
import './signup.css'

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        role,
      };

      const response = await axios.post("https://compleyehealthcareservices.onrender.com/signup", newUser);
      // Assuming the backend returns a response indicating successful signup
      if (response.data.success) {
        console.log("Signup successful");
        // Handle successful signup
      } else {
        console.log("Signup failed");
        // Handle failed signup
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="nurse">Nurse</option>
          </select>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;
