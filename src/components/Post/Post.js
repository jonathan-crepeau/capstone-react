import React from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

import './Post.css';

class Post extends React.Component {
  state = {
    originalPostId: null,
    postAuthorId: null,
    title: null,
    userDescription: null,
    plantType: null,
    waterNeeds: null,
    lightNeeds: null,
    size: null,
    cost: null
  }

  handleFavorite = async (event) => {
    console.log('favorited!');
    this.setState({ originalPostId: null });
    let parentDiv = event.target.closest('.postInteraction');
    // console.log(parentDiv)
    let postID = parentDiv.firstElementChild.textContent;
    console.log(postID)
    this.setState({ originalPostId: postID });
    let rez = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${this.state.originalPostId}`, { withCredentials: true })
      .then(rez => {
        console.log('rez', rez)
        this.setState({
          postAuthorId: rez.data.user,
          title: rez.data.title,
          userDescription: rez.data.userDescription,
          plantType: rez.data.plantType,
          waterNeeds: rez.data.waterNeeds,
          lightNeeds: rez.data.lightNeeds,
          size: rez.data.size,
          cost: rez.data.cost,
        })
        this.createFavorite();
      })
      .catch(err => console.log(err));
  };

  createFavorite = async (event) => {
    let res = await axios.post(`${process.env.REACT_APP_API_URL}/favorites/create`, this.state, { withCredentials: true })
      .then(res => console.log('createFav', res))
      .catch(err => console.log(err));
  }
  
  // handleFavorite = event => {
  //   console.log('favorited!');
  //   this.setState({ favorites: null });
  //   let parentDiv = event.target.closest('.postInteraction');
  //   console.log(parentDiv)
  //   let postId = parentDiv.firstElementChild.textContent;
  //   console.log(postId)
  //   this.setState({ favorites: postId });
  //   axios.post(`${process.env.REACT_APP_API_URL}/favorites/create`, this.state, { withCredentials: true })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // };

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
          <p className="hidden">{this.props.post._id}</p>
          <Button id="favoriteButton" onClick={this.handleFavorite}>Favorite</Button><Button id="purchaseButton">Purchase</Button>
        </div>
      </div>
    );
  }
}

export default Post;