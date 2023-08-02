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
        <NavLink to="/about " activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/sign-up" activeClassName="active-link">
          Signup
        </NavLink>
        <NavLink to="/contact us " activeClassName="active-link">
            Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
