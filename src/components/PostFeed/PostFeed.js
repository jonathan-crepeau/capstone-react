import React from 'react';
import axios from 'axios';
import PostList from '../PostList/PostList';
import AddPost from '../AddPost/AddPost';
import EditProfile from '../EditProfile/EditProfile';

class PostFeed extends React.Component {
  state = {
    postContent: []
  };

  componentDidMount() {
    console.log('Axios call for all posts');
    // "withCredentials" serves the cookie, so I don't have to pass req.session.currentUser.id to the db.collection.find routes
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
        <AddPost />
        <PostList posts={this.state.postContent} />
      </div>
    );
  }
}

export default PostFeed;