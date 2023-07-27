import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Merch Ltd</div>
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
        <NavLink to="/sign-up" activeClassName="active-link">
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
