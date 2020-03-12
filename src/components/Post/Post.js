import React from 'react';
import { Button } from 'semantic-ui-react'

import './Post.css';

class Post extends React.Component {
  state = {
    favorites: []
  }
  
  handleFavorite = event => {
    console.log('favorited!');
    this.setState({ favorites: null });
    var postId = event.target.closest('.postInteraction');
    console.log(postId);
  }
  // handlefavorite (function)
  // setState favorite to null
  // select object (get ID of post)
  // setState favorites = id of post
  // axios call with that as parameter (req.query?) ... dalton showed me this on wayfarer, may need to change route
  // remove class, then add class to change color of button? (grey to pink? pink to pinker?)

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
          <p className="hidden">ID: {this.props.post._id}</p>
          <Button id="favoriteButton" onClick={this.handleFavorite}>Favorite</Button><Button id="purchaseButton">Purchase</Button>
        </div>
      </div>
    );
  }
}

export default Post;