import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Capstone Logo
          </Link>
        </li>
        <li>
          <Link to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;