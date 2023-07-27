import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Merch Limited</div>
      <div className="navbar-links">
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/Manager" activeClassName="active-link">
          Manager
        </NavLink>
        <NavLink to="/merchants " activeClassName="active-link">
            Merchants
        </NavLink>
        <NavLink to="/routes " activeClassName="active-link">
            Routes
        </NavLink>
        <NavLink to="/register" activeClassName="active-link">
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
