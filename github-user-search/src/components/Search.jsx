// src/components/Search.jsx
import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find any users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-20 text-blue-700 text-center pt-3">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="space-y-3 flex flex-col items-center">
        <div>
          <label className="block text-md text-blue-500 font-medium">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-52 md:72 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="GitHub Username"
          />
        </div>
        <div>
          <label className="block text-md text-blue-500 font-medium">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-52 md:72 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Location"
          />
        </div>
        <div>
          <label className="block text-md text-blue-500 font-medium">Minimum Repositories:</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 block w-52 md:72 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Minimum Repositories"
          />
        </div>
        <button
          type="submit"
          className="w-52 md:72 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-500 flex flex-col items-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 flex flex-col items-center">{error}</p>}
      {userData.length > 0 && (
        <div className="mt-4 space-y-4 flex flex-col md:flex-row md:flex-wrap gap-6 items-center">
          {userData.map(user => (
            <div key={user.id} className="border p-4 rounded-lg shadow-md w-52 flex flex-col items-center">
              <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
              <h2 className="text-lg font-semibold mt-2">{user.login}</h2>
              <p className="text-sm text-gray-600">Location: {user.location || 'N/A'}</p>
              <p className="text-sm text-gray-600">Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline mt-2 block">View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;