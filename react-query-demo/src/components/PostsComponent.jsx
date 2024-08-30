import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query's useQuery hook with additional options
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
    isPreviousData
  } = useQuery('posts', fetchPosts, {
    // Cache time (time in milliseconds to keep data in cache)
    cacheTime: 1000 * 60 * 5, // 5 minutes

    // Stale time (time in milliseconds to consider data fresh)
    staleTime: 1000 * 60, // 1 minute

    // Refetch on window focus (default is true)
    refetchOnWindowFocus: true,

    // Keep previous data while new data is being fetched
    keepPreviousData: true
  });

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>An error occurred: {error.message}</div>;

  // Render posts
  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

