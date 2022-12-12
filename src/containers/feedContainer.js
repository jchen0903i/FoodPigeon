import React from 'react';
import Post from '../components/Post.js';
import './feedContainer.css';
import PostForm from '../components/PostForm.js';

const FeedContainer = (props) => {
  console.log(props.popup);

  return (
    <div className='feed'>
      {props.backendData &&
        props.backendData.map((post) => {
          return (
            <Post
              user={props.user}
              setBackendData={props.setBackendData}
              id={post._id}
              key={post._id}
              data={post}
            />
          );
        })}
    </div>
  );
};

export default FeedContainer;
