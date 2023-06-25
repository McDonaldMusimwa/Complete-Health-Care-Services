import React from 'react';
import { Link } from 'react-router-dom';
import './NurseDashboard.css'
const NursesDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/nurses/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        {/* Add content for the dashboard */}
      </div>
    </div>
  );
};

export default NursesDashboard;
