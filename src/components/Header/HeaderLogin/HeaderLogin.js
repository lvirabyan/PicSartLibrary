// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLogin.css'; 

const HeaderLogin = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Library" />
      </div>
    </header>
  );
};

export default HeaderLogin;
