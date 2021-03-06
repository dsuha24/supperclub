import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Recipes</NavLink>
    </li>
    <li>
      <NavLink to="/u1/places">Chefs</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">Create New Recipe</NavLink>
    </li>
    <li>
      <NavLink to="/auth">Login</NavLink>
    </li>
  </ul>
};

export default NavLinks;