import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/routes" className="active-link">
          Routes
        </Link>
        <Link to="/sales" className="active-link">
          Sales
        </Link>
        <Link to="/calenderview" className="active-link">
          Calender
        </Link>
        <Link to="/Reports " className="active-link">
            Reports
        </Link>
      </div>
    </nav>
  );
};

export default Dashboard;
