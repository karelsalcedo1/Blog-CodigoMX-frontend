import React from 'react';
import Header from '../Components/Header';
import CreatePost from '../Components/CreatePost';
import ShowPost from '../Components/ShowPost';
import Posts from '../Components/Posts';


function blog() {
  return (
    <div className="App">
      <Header/>
      <CreatePost/>
      <ShowPost/>
      <Posts/>
    </div>
  );
}

export default blog;
