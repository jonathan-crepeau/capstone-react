import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../Auth/Login';

const Navbar = props => {
  return (
    <nav>
        <div className="nav-links">
          <Link to="/">
            Capstone Logo
          </Link>
          <Link to="/search">
            Search
          </Link>
          <Link to="/favorites">
            Favorites
          </Link>
          <Login />
        </div>
    </nav>
  )
}

export default Navbar;