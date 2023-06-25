import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/admin/nurses">Nurses</Link>
          </li>
          <li>
            <Link to="/admin/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/admin/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        {/* Add content for each option here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
