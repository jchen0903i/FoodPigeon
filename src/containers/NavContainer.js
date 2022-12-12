import React from 'react';
import './NavContainer.css';
import face from './pics/face.png';
import post from './pics/post.png';
import pigeon from './pics/pigeon.png';
import Sort from '../components/Sort';

const NavContainer = (props) => {
  return (
    <div className='nav'>
      <div className='leftNav'>
        <h2 className='profile'>
          <img className='face' src={face} />
          {props.user}
        </h2>
        <Sort
          setBackendData={props.setBackendData}
          backendData={props.backendData}
          ogData={props.ogData}
        />
      </div>
      <div className='title'>
        <img className='pigeon' src={pigeon} />
        <h1>FoodPigeon</h1>
      </div>
      <button onClick={props.openPopup}>
        <img className='newPost' src={post} />
      </button>
    </div>
  );
};

export default NavContainer;
