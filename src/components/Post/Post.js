import React from 'react';

const Post = props => {
  return (
    <div classNam="Post">
      <p>Title: {props.post.title}</p>
      <p>{props.post.userDescription}</p>
    </div>
  );
}

export default Post;