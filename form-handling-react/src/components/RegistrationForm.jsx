import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    let isValid = true;

    if (!username) {
      validationErrors.username = 'Username is required';
      isValid = false;
    }
    if (!email) {
      validationErrors.email = 'Email is required';
      isValid = false;
    }
    if (!password) {
      validationErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      // Submit the form (e.g., send data to the server)
      console.log('Form data submitted:', { username, email, password });
    }
  };

  return (
    <>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegistrationForm;