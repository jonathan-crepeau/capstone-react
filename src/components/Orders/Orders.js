import React from 'react';
import axios from 'axios';
import PostList from '../PostList/PostList';
// import axios from 'axios';

import './Orders.css';

class Orders extends React.Component {
  state = {
    // postContent: []
    postId: '',
    sellerId: '',
    sellerUsername: '',
    sellerPublicEmail: '',
    buyerUsername: '',
    buyerPublicEmail: '',
  }

  componentDidMount() {
    console.log('axios for user`s orders');
    axios.get(`${process.env.REACT_APP_API_URL}/favorites/show`, { withCredentials: true })
      .then(res => {
        this.setState({
          postContent: res.data
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <PostList posts={this.state.postContent} />
      </div >
    );
  }
}

export default Orders;