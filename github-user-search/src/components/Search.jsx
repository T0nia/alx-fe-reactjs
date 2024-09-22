import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="username"
          placeholder="GitHub Username"
          value={username}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location (optional)"
          value={location}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min Repositories (optional)"
          value={minRepos}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData.length > 0 && (
        <div className="mt-4">
          {userData.map(user => (
            <div key={user.id} className="border p-4 rounded mb-4">
              <h2 className="font-bold">{user.login}</h2>
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos || 0}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;