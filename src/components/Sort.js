import React, { useState, useEffect } from 'react';
import './Sort.css';

const Sort = (props) => {
  const sortChangeHandler = (e) => {
    const location = e.target.value;
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        props.setBackendData((prevState) => {
          if (location.toLowerCase() === 'sort') return data;
          return data.filter((el) => {
            return el.state.toLowerCase() === location.toLowerCase();
          });
        });
      });
  };
  return (
    <div className='sort'>
      <select name='sort' onChange={sortChangeHandler}>
        <option value='sort'>ALL</option>
        {props.ogData
          .reduce((acc, curr) => {
            if (!acc.includes(curr.state)) {
              acc.push(curr.state);
            }
            return acc;
          }, [])
          .map((el) => {
            return <option value={el}>{el}</option>;
          })}
      </select>
    </div>
  );
};

export default Sort;
