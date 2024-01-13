
import React, { useState } from "react";
import HeaderLogin from "../Header/HeaderLogin/HeaderLogin";
import FooterLogin from "../Footer/FooterLogin/FooterLogin";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"; // Add your CSS styles here

const LoginRegister = () => {
  const [formData, setFormData] = useState({
    useremail: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === 'useremail') {
      setEmailError('');
    } else if (name === 'password') {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:3003/auth/login", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                useremail: formData.email,
                password: formData.password,
              }),
            });

    
          if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('refreshtoken', data.refreshToken);
            navigate('/userPage', { state: { user: data.user } });
            window.location.reload();
          } else {
            const data = await response.json();
            setError(data.message || 'Login failed. Please check your credentials.');
          }
        } catch (error) {
          if (error instanceof TypeError && error.message === 'Failed to fetch') {
            setError('An unexpected network error occurred. Please try again.');
          } else {
            const data = await error.json();
            if (error.status === 404) {
              setEmailError('User not found. Please check your email.');
            } else if (error.status === 401) {
              setPasswordError('Incorrect password. Please try again.');
            } else {
              setError(data.message || 'An unexpected error occurred. Please try again.');
            }
          }
        }
      };

  const switchAction = () => {
    setAction((prevAction) => (prevAction === 'Login' ? 'Sign Up' : 'Login'));
  };

  return (
    <div className="mainconteiner">
    <HeaderLogin />
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === 'Login' ? (
            <div></div>
          ) : (
            <div className="input">
              <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            </div>
          )}
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className={emailError ? 'error' : ''}
            />
            {emailError && <div className="error-message-field">{emailError}</div>}
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
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          {action}
        </button>
        <div className="form-links">
          <a className="link" href="#">
            Forgot Password
          </a>
          <span onClick={switchAction} className="link">
            Switch to {action === 'Login' ? 'Sign Up' : 'Login'}
          </span>
          {action === 'Login' ? (
            <Link to="/registration">Switch to Registration</Link>
          ) : (
            <Link to="/login">Switch to Login</Link>
          )}
        </div>
        {error && <div className="error-message-field">{error}</div>}
      </div>
      <FooterLogin />
    </div>
  );
}

export default LoginRegister;
