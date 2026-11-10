
import React from "react";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#" className="logo">
            <span>BOOK</span> STORE<span className="logo-dot">.</span>
          </a>

          <p>
            Your next favorite book is just a page away.
            Explore stories, discover knowledge, and enjoy reading.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#books">Books</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@bookstore.com</p>
          <p>Online Book Store</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Book Store. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
