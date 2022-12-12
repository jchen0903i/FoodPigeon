import React, { useEffect, useState } from 'react';
import FeedContainer from './containers/feedContainer';
import NavContainer from './containers/NavContainer';
import PostForm from './components/PostForm';
import './App.css';

const App = (props) => {
  const [backendData, setBackendData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [popup, openPopup] = useState(false);

  const togglePopup = () => {
    openPopup(!popup);
  };

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        setOriginalData(data);
      });
  }, []);
  console.log(backendData);

  return (
    <div>
      {popup && (
        <PostForm
          togglePopup={togglePopup}
          setBackendData={setBackendData}
          user={props.user}
          setOriginalData={setOriginalData}
        />
      )}
      <NavContainer
        openPopup={togglePopup}
        user={props.user}
        setBackendData={setBackendData}
        backendData={backendData}
        ogData={originalData}
      />
      <FeedContainer
        popup={popup}
        user={props.user}
        backendData={backendData}
        setBackendData={setBackendData}
      />
    </div>
  );
};

export default App;
