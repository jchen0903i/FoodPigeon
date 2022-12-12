import React, { useState, useEffect } from 'react';
import './Post.css';
import like from '../containers/pics/like.png';

const Post = (props) => {
  const data = props.data;
  const [likeCount, setLikeCount] = useState(data.likes);

  const deletePostHandler = (e) => {
    const id = props.id;
    const postUser = props.data.user;
    const currUser = props.user;

    if (postUser === currUser) {
      fetch(`/api/${id}`, {
        method: 'DELETE',
      }).then(() => {
        props.setBackendData((prevState) => {
          console.log('prev', prevState);
          return prevState.filter((el) => {
            return el && el._id !== id;
          });
        });
      });
    }
  };

  const likePostHandler = (e) => {
    console.log(props.id);
    fetch(`/api/${props.id}`, {
      method: 'PATCH',
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setLikeCount(res);
      });
  };

  return (
    <div className='post' id={props.id}>
      <div className='header'>
        <h3>{data.name}</h3>
      </div>
      <button className='deletePost' onClick={deletePostHandler}>
        X
      </button>
      <p className='address'>{`${data.address}, ${data.city}, ${data.state}`}</p>
      <img src={data.url} />
      <div className='description'>
        <div className='rateLikes'>
          <p className='pricePoint'>{'$'.repeat(data.rating)}</p>

          <div className='likesBar'>
            <p id='likes'>{likeCount} Likes</p>
            <button onClick={likePostHandler}>
              <img className='like' src={like} />
            </button>
          </div>
        </div>
        <p className='comment'>
          <strong className='user'>{`${data.user}: `}</strong>
          {data.comment}
        </p>
      </div>
    </div>
  );
};

export default Post;
