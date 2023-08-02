import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Merch Limited</div>
      <div className="navbar-links">
        <NavLink to="/home" className="active-link">
          Home
        </NavLink>
        <NavLink to="/about" className="active-link">
        <NavLink to="/about " className="active-link">
          About
        </NavLink>
        <NavLink to="/login" className="active-link">
          Login
        </NavLink>
        <NavLink to="/merchants" className="active-link">
          Merchants
        <NavLink to="/contact us " className="active-link">
            Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
