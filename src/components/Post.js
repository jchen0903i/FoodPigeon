import React from 'react';
import './Post.css';

const Post = (props) => {
  const data = props.data;
  return (
    <div className='post'>
      <div className='header'>
        <h3>{data.name}</h3>
      </div>
      <p className='address'>{`${data.address}, ${data.city}, ${data.state}`}</p>
      <img src={data.url} />
      <div className='description'>
        <p className='comment'>
          <strong className='user'>{`${data.user}: `}</strong>
          {data.comment}
        </p>
      </div>
    </div>
  );
};

export default Post;
