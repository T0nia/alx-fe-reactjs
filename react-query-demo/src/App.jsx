import React from 'react';
import PostsComponent from './components/PostsComponent';

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostsComponent />
    </div>
  );
}
//
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the QueryClient instance to the application
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

//
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
