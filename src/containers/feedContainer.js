import React from 'react';
import Post from '../components/Post.js';
import './feedContainer.css';

const FeedContainer = (props) => {
  if (!props.backendData.length) {
    return <p>...loading</p>;
  } else {
    return (
      <div className='feed'>
        {props.backendData.map((post) => {
          return <Post key={post._id} data={post} />;
        })}
      </div>
    );
  }
};

export default FeedContainer;
