import React, { useEffect, useState } from 'react';
import './Login.css';
import pigeon from './containers/pics/pigeon.png';
import App from './App.js';
import SignUp from './components/SignUp';

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState('guest');
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [toggleWrongPW, setToggleWrongPw] = useState(false);

  const loginHandler = () => {
    const id = document.querySelector('#id').value;
    const pw = document.querySelector('#password').value;
    console.log(id, pw);
    const reqObj = { username: id, password: pw };
    console.log(reqObj);

    fetch('/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqObj),
    })
      .then((res) => res.json())
      .then((res) => {
        setToggleWrongPw(!res);
        setLoginStatus(res);
        setUser(id);
      });
  };

  const signUpHandler = () => {
    setToggleSignUp(!toggleSignUp);
    console.log('test', toggleSignUp);
  };

  if (loginStatus) {
    return <App user={user} />;
  } else {
    return (
      <div>
        {toggleSignUp && <SignUp signUpHandler={signUpHandler} />}
        <div className='background'>
          <div className='loginScreen'>
            <div className='loginTitle'>
              <img className='loginPigeon' src={pigeon} />
              <h1 className='appName'>FoodPigeon</h1>
            </div>
            <label>ID:</label>
            <input id='id' type='text' name='id'></input>
            <label>Password:</label>
            <input id='password' type='password' name='password'></input>
            <button className='loginBtn' onClick={loginHandler}>
              Login
            </button>
            <button onClick={signUpHandler}>Sign up</button>
            {toggleWrongPW && (
              <p className='wrongPW'>
                INVALID ID OR PASSWORD. PLEASE TRY AGAIN!
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
