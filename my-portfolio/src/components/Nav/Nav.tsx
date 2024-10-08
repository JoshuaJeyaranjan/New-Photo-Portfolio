import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss'

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li className="navlink">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="navlink">
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="navlink">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li className="navlink">
          <NavLink 
            to="/giving-back" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Giving Back
          </NavLink>
        </li>
        <li className="navlink">
          <NavLink 
            to="/street" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Street
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
