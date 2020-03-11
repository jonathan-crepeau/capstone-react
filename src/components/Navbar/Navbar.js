import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LoginModal from '../Auth/Login'; 
import RegisterModal from '../Auth/Register';

import './Navbar.css';

class Navbar extends React.Component {

  render() {
    return (
      <nav>
        <div className="nav__left">
          <Link to="/">
            Capstone Logo
          </Link>
        </div>
        {this.props.currentUser ? (
          <>
            <div className="nav__center">
              <Link className="center" to="/search">
                Search
              </Link>
              <Link className="center" to="/favorites">
                Favorites
              </Link>
              <Link className="center" to="/orders">
                My Orders
              </Link>
            </div>
            <div className="nav__right">
              <a href="/profile">{this.props.currentUsername}</a>
              <Link onClick={this.props.logout} >Logout</Link>
            </div>
          </>
        ) : (
        <div className="nav__right">
          <LoginModal currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser} />
          <RegisterModal />
        </div>
        )}
      </nav>
    );
  }
}

export default Navbar;