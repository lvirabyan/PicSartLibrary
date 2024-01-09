// Registration.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Add your registration logic here (e.g., send registration data to a server)
    console.log('Registering with:', email, password);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default Registration;
