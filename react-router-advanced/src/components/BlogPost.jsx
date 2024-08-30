import React from 'react';
import { useParams } from 'react-router-dom';

// Simulate fetching a blog post by ID
const fetchBlogPost = (id) => {
  // Replace with actual data fetching logic
  const blogPosts = [
    { id: '1', title: 'Blog Post 1', content: 'Content of Blog Post 1' },
    { id: '2', title: 'Blog Post 2', content: 'Content of Blog Post 2' },
  ];
  return blogPosts.find(post => post.id === id) || {};
};

function BlogPost() {
  const { id } = useParams();
  const blogPost = fetchBlogPost(id);

  return (
    <div>
      <h2>{blogPost.title || 'Post Not Found'}</h2>
      <p>{blogPost.content || 'The content of this blog post is not available.'}</p>
    </div>
  );
}

export default BlogPost;