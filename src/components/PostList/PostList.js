import React from 'react';
import Post from '../Post/Post';

const displayPosts = postsArr => {
  return postsArr.map(data => {
    return <Post key={data.id} post={data}/>
  })
}

const PostList = props => {
  return (
    <div className="container">
      {displayPosts(props.posts)}
    </div>
  );
}

export default PostList;