import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Merch Limited</div>
      <div className="navbar-links">
        <NavLink to="/home" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/Manager" activeClassName="active-link">
          Manager
        </NavLink>
        <NavLink to="/merchants " activeClassName="active-link">
            Merchants
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
