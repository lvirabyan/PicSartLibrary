// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create and import your styles

const Footer = () => {
  return (
    <footer>
      <div className="column">
        <h3>Contact Details</h3>
        <p>Academy's Address</p>
        <p>Phone Number</p>
        <p>Email Address</p>
      </div>

      <div className="column">
        <h3>Library Hours</h3>
        <p>Monday: 9 AM - 5 PM</p>
        <p>Tuesday: 9 AM - 5 PM</p>
        <p>Wednesday: 9 AM - 5 PM</p>
        <p>Thursday: 9 AM - 5 PM</p>
        <p>Friday: 9 AM - 5 PM</p>
      </div>

      <div className="column">
        <h3>Helpful Links</h3>
        <a href="https://academy-website.com">Academy's Website</a>
        <a href="https://social-media-page.com">Social Media Pages</a>
        <a href="https://feedback-form.com">Feedback Form</a>
      </div>
    </footer>
  );
};

export default Footer;
