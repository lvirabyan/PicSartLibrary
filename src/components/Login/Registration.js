
import React, { useState } from "react";
import HeaderLogin from "../Header/HeaderLogin/HeaderLogin";
import FooterLogin from "../Footer/FooterLogin/FooterLogin";
import { Link, useNavigate } from 'react-router-dom';
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [usernameError, setUsernameError] = useState('');
  const [useremailError, setUseremailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === 'username') {
      setUsernameError('');
    } else if (name === 'useremail') {
      setUseremailError('');
    } else if (name === 'password') {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.username || !formData.useremail || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch("http://localhost:3003/auth/registration", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log('Registration successful:', data);
        // Handle success as needed
      } else {
        const data = await response.json();
        console.error('Registration failed:', data);
        setError(data.message || 'Registration failed. Please check your details.');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      <HeaderLogin />
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className={usernameError ? 'error' : ''}
            />
            {usernameError && <div className="error-message-field">{usernameError}</div>}
          </div>
          <div className="input">
            <input
              type="email"
              name="useremail"
              placeholder="Email"
              onChange={handleChange}
              className={useremailError ? 'error' : ''}
            />
            {useremailError && <div className="error-message-field">{useremailError}</div>}
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className={passwordError ? 'error' : ''}
            />
            {passwordError && <div className="error-message-field">{passwordError}</div>}
          </div>
        </div>
        <button className="registration-button" onClick={handleSubmit}>
          Register
        </button>
        <div className="form-links">
          <Link to="/login">Already have an account? Login here</Link>
        </div>
        {error && <div className="error-message-field">{error}</div>}
      </div>
      <FooterLogin />
    </>
  );
}

export default Registration;
