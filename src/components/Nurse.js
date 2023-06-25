import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://compleyehealthcareservices.onrender.com/auth", { email: useremail, password });
      // Assuming the backend returns a response indicating successful login
      if (response.data.success) {
        navigate("/NurseDashboard");
      } else {
        setUserEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Nurse Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={useremail}
            onChange={handleUserEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      <br />
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default User;
