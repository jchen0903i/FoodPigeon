import { proposalSyntaxPlugins } from '@babel/preset-env/lib/shipped-proposals';
import React from 'react';
import './PostForm.css';

const PostForm = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('.postform input');
    const inputObj = Array.from(inputs).reduce(
      (acc, input) => {
        return { ...acc, [input.name]: input.value };
      },
      { user: props.user }
    );
    console.log(inputObj);
    fetch('/api', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputObj),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        props.setBackendData((prevState) => [...prevState, data]);
        props.setOriginalData((prevState) => [...prevState, data]);
        props.togglePopup((prevState) => !prevState);
      });
  };
  return (
    <div className='FormBox'>
      <button className='closeBtn' onClick={props.togglePopup}>
        X
      </button>
      <form className='PostForm' onSubmit={formSubmitHandler}>
        <label>Restaurant Name</label>
        <input type='text' name='name' />
        <label>Cuisine</label>
        <input type='text' name='type' />
        <label>Address</label>
        <input type='text' name='address' />
        <label>City</label>
        <input type='text' name='city' />
        <label>State</label>
        <input type='text' name='state' />
        <label>Photo url</label>
        <input type='text' name='url' />
        <label>Price</label>
        <input type='number' min='1' max='4' name='rating' />
        <label>Comments</label>
        <input className='commentBox' type='text' name='comment' />
        <button className='submitPost' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
