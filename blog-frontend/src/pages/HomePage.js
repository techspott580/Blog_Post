import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import PostList from '../components/PostList';

const HomePage = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
       fetchPosts()
           .then((res) => setPosts(res.data))
           .catch((err) => console.log(err));
   }, []);

   return (
       <div>
           <h1>Blog Posts</h1>
           <PostList posts={posts} />
       </div>
   );
};

export default HomePage;
