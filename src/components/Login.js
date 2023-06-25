import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import Nurse from "./Nurse";
import './Login.css'

const Login = () => {
  return (
    <Router>
      <div className="LoginChoice">
        <h2>Login</h2>
        <div className="choose">
          <Link to="/admin">Admin</Link>
          <Link to="/nurse">Nurse</Link>
        </div>
      </div>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/nurse" element={<Nurse />} />
      </Routes>
    </Router>
  );
};

export default Login;
