import React from 'react';
import axios from 'axios';
import LoginModal from '../Auth/Login';
import Navbar from '../Navbar/Navbar';
import PostList from '../PostList/PostList';

class PostFeed extends React.Component {
  state = {
    postContent: []
  };

  componentDidMount() {
    console.log('Axios call for all posts');
    axios.get(`${process.env.REACT_APP_API_URL}/posts`, { withCredentials: true })
      .then(res => {
        console.log(res)
        this.setState({
          postContent: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar className="nav-bar" />
        <PostList posts={this.state.postContent} />
      </div>
    );
  }
}

export default PostFeed;