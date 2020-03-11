import React from 'react';
// import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PostFeed from './components/PostFeed/PostFeed';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('uid')
  }

  setCurrentUser = userId => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
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
      <>
        <Navbar />
        <Routes
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
      </>
    );
  }
}

export default App;
