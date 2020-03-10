import React from 'react';
// import { withRouter } from 'react-router-dom';
import PostFeed from './components/PostFeed/PostFeed';
import './App.css';

class App extends React.Component {
  state = {
    // currentUser: localStorage.getItem('uid');
  }

  // setCurrentUser = userId => {
  //   this.setState({ currentUser: session.currentUser.id });
  //   localStorage.setItem('uid', session.currentUser.id);
  // };

  render() {
    return (
      <PostFeed />
    );
  }
}

export default App;
