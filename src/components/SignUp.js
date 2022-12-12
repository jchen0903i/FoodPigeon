import React from 'react';
import './SignUp.css';

const SignUp = (props) => {
  const createAccHandler = () => {
    const id = document.querySelector('#createId').value;
    const pw = document.querySelector('#createPw').value;
    const reqObj = { username: id, password: pw };

    fetch('/api/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqObj),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        props.signUpHandler();
      });
  };
  return (
    <div className='SignUpBox'>
      <button className='closeBtn' onClick={props.signUpHandler}>
        X
      </button>
      <h1>Create Account</h1>
      <label>Username:</label>
      <input id='createId' type='text'></input>
      <label>Password:</label>
      <input id='createPw' type='password'></input>
      <label>Confirm Password:</label>
      <input type='password'></input>
      <button className='createBtn' onClick={createAccHandler}>
        Create
      </button>
    </div>
  );
};

export default SignUp;
