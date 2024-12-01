
import React, { useState, useEffect } from 'react';
import '../styles/PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);


  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          
          setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } else {
          console.error('Failed to delete post');
        }
      })
      .catch((error) => console.error('Error deleting post:', error));
  };

  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No posts available. Create a new post to get started!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
