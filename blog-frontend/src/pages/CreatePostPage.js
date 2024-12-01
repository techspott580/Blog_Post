import React, { useState } from 'react';
import { createPost } from '../api';
import '../styles/PostForm.css';


const PostForm = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const handleSubmit = (e) => {
       e.preventDefault();
       createPost({ title, content })
           .then(() => {
               alert('Post created successfully!');
               setTitle('');
               setContent('');
           })
           .catch((err) => console.log(err));
   };

   return (
       <form className="post-form" onSubmit={handleSubmit}>
           <label>
               Title:
               <input 
                   type="text" 
                   value={title} 
                   onChange={(e) => setTitle(e.target.value)} 
               />
           </label>
           <label>
               Content:
               <textarea 
                   value={content} 
                   onChange={(e) => setContent(e.target.value)} 
               />
           </label>
           <button type="submit">Create Post</button>
       </form>
   );
};

export default PostForm;
