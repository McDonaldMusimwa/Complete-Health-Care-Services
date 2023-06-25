import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUseremail(event.target.value);
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
        setLoggedIn(true);
        navigate("/AdminDashboard");
      } else {
        setLoggedIn(false);
        setUseremail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loggedIn) {
    return (
      <div>
        <h3>Welcome, Admin!</h3>
        {/* Add admin-specific content here */}
      </div>
    );
  }

  return (
    <div>
      <h3>Admin Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Useremail:</label>
          <input type="text" value={useremail} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
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

export default Admin;
