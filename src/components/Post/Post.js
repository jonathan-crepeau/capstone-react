import React from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

import './Post.css';

class Post extends React.Component {
  state = {
    originalPostId: this.props.post._id,
    postAuthorId: this.props.post.user,
    title: this.props.post.title,
    userDescription: this.props.post.userDescription,
    plantType: this.props.post.plantType,
    waterNeeds: this.props.post.waterNeeds,
    lightNeeds: this.props.post.lightNeeds,
    size: this.props.post.size,
    cost: this.props.post.cost,
  }

  handleFavorite = async (event) => {
    let res = await axios.post(`${process.env.REACT_APP_API_URL}/favorites/create`, this.state, { withCredentials: true })
      .then(res => console.log('createFav', res))
      .catch(err => console.log(err));
  }
  
  // NOTE - Purchase Button Event Listener Functionality
  handlePurchase = async (event) => {
    let res = await axios.post(`${process.env.REACT_APP_API_URL}/orders/create`, this.state, { withCredentials: true })
      .then(res => {
        console.log('createOrd', res)
        // console.log('stateOrgPostID', this.state.originalPostId)
        this.orderDeleteFavorite();
      })
      .catch(err => console.log(err));
  };

  orderDeleteFavorite = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/favorites/${this.state.originalPostId}`, { withCredentials: true })
    .then(res => console.log('deletedFav', res))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post">
        <div className="postHeader">
          <p>Title: {this.props.post.title}</p>
          <p>Seller: username </p>
        </div>
        <div className="postContent">
          <p>Description: {this.props.post.userDescription}</p>
          <p>Plant Type: {this.props.post.plantType}</p>
          <p>Watering Needs: {this.props.post.waterNeeds}</p>
          <p>Light Needs: {this.props.post.lightNeeds}</p>
          <p>Size: {this.props.post.size}</p>
          <p>Cost: {this.props.post.cost}</p>
        </div>
        <div className="postInteraction">
          <p className="hidden">{this.props.post._id}</p>
          <Button id="favoriteButton" onClick={this.handleFavorite}>Favorite</Button><Button id="purchaseButton" onClick={this.handlePurchase} >Purchase</Button>
        </div>
      </div>
    );
  }
}

export default Post;