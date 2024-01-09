// src/components/Footer/Footer.js
import React from 'react';
import './FooterLogin.css'; // Make sure to create and import your styles

const FooterLogin = () => {
  return (
    <footer>
      <div className="column">
        <h3>Helpful Links</h3>
        <a href="https://academy-website.com">Academy's Website</a>
        <a href="https://social-media-page.com">Social Media Pages</a>
        <a href="https://feedback-form.com">Feedback Form</a>
      </div>
    </footer>
  );
};

export default FooterLogin;
