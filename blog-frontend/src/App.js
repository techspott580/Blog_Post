
import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
// import PostList from './components/Navbar';
import '../src/styles/App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Blog_Bloom</h1>
      {/* <Navbar/> */}
      <PostForm />
      <PostList />
    </div>
  );
};

export default App;


