// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Library" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/login">LoginRegistration</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
