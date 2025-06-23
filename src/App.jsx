// src/App.js
import React from 'react';
import BlogPostItem from './BlogPostItem';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <h1>My Blog</h1>
        <BlogPostItem title="First Post" content="This is the content of the first post." />
        <BlogPostItem title="Second Post" content="Here is the second post content." />
      </div>
      <Footer />
    </>
  );
}

export default App;
