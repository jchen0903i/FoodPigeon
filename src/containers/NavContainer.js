import React from 'react';
import './NavContainer.css';
import face from './face.png';
import post from './post.png';
import pigeon from './pigeon.png';

const NavContainer = () => {
  return (
    <div className='nav'>
      <button>
        <img className='face' src={face} />
      </button>
      <div className='title'>
        <img className='pigeon' src={pigeon} />
        <h1>FoodPigeon</h1>
      </div>
      <button>
        <img className='newPost' src={post} />
      </button>
    </div>
  );
};

export default NavContainer;
