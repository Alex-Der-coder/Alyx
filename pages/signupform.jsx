// Assuming you're using React for the frontend

import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await axios.post('/api/signup', { email, password });

      // Handle success
      console.log(response.data.message);
    } catch (error) {
      // Handle error
      console.error(error.response.data.error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
};

export default SignupForm;
