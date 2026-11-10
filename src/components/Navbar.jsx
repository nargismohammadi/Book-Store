
import React, { useState } from "react";

function Navbar({ cartCount, searchTerm, setSearchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#" className="logo">
          <span>BOOK</span> STORE<span className="logo-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#books" onClick={() => setMenuOpen(false)}>
            Books
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </div>

        <div className="nav-actions">

          <div className="nav-search">
            <span>⌕</span>

            <input
              type="search"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <a href="#cart" className="cart-button">
            🛒

            <span className="cart-count">
              {cartCount}
            </span>
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
