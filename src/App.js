import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('uid'),
    currentUsername: localStorage.getItem('username')
  }

  setCurrentUser = data => {
    this.setState({ 
      currentUser: data.id,
      currentUsername: data.username
     });
    localStorage.setItem('uid', data.id);
    localStorage.setItem('username', data.username);
  };

  logout = () => {
    localStorage.removeItem('uid');
    Axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
    .then(res => {
      console.log(res);
      this.setState({ currentUser: null });
      this.props.history.push('/');
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
        <Navbar currentUser={this.state.currentUser} currentUsername={this.currentUsername} setCurrentUser={this.setCurrentUser} logout={this.logout} />
    );
  }
}

export default withRouter(App);
