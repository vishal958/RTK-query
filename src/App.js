import React from 'react';
import Posts from './components/Posts';
import AddPost from './components/Posts/AddPost';
import './style.css';

export default function App() {
  return (
    <div>
      <Posts />
      <AddPost />
    </div>
  );
}
