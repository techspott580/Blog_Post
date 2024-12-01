
export const createPost = async (post) => {
   try {
     const response = await fetch('http://localhost:5000/api/posts', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(post),
     });
 
     if (!response.ok) {
       throw new Error('Failed to create post');
     }
 
     const newPost = await response.json();
     return newPost;
   } catch (error) {
     console.error('Error creating post:', error);
     throw error;
   }
 };
 