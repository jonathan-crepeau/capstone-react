import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import PostList from '../PostList/PostList';
import AddPost from '../AddPost/AddPost';
import EditProfile from '../EditProfile/EditProfile';

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
        <AddPost />
        <EditProfile />
        <PostList posts={this.state.postContent} />
      </div>
    );
  }
}

export default PostFeed;