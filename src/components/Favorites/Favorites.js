import React from 'react';
import axios from 'axios';
import PostList from '../PostList/PostList';
import './Favorites.css';
import Axios from 'axios';

class Favorites extends React.Component {
  state = {
    postContent: []
  }


  componentDidMount() {
    console.log('axios for user`s favorite posts');
    axios.get(`${process.env.REACT_APP_API_URL}/favorites/show`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({
          postContent: res.data
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='container'>
        <PostList posts={this.state.postContent} />
      </div>
    );
  }

}


export default Favorites;