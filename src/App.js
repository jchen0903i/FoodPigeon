import React, { useEffect, useState } from 'react';
import FeedContainer from './containers/feedContainer';
import NavContainer from './containers/NavContainer';
import './App.css';

const App = () => {
  const [backendData, setBackendData] = useState([]);

  const addPostHandler = () => {};

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      <NavContainer />
      <FeedContainer backendData={backendData} />
    </div>
  );
};

export default App;
