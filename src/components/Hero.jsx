
import React from "react";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-tag">
            WELCOME TO BOOK STORE
          </span>

          <h1>
            Find Your Next
            <span> Favorite Book</span>
          </h1>

          <p>
            Explore a world of stories, knowledge, and imagination.
            Discover amazing books and find your next great read.
          </p>

          <div className="hero-buttons">
            <a href="#books" className="primary-btn">
              Explore Books
              <span> → </span>
            </a>

            <a href="#books" className="secondary-btn">
              Discover More
            </a>
          </div>

          <div className="hero-info">
            <div>
              <h3>1000+</h3>
              <span>Books Available</span>
            </div>

            <div>
              <h3>500+</h3>
              <span>Happy Readers</span>
            </div>

            <div>
              <h3>50+</h3>
              <span>Categories</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-background"></div>

          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&auto=format&fit=crop&q=85"
            alt="Beautiful library with books"
          />

          <div className="hero-floating-card">
            <span>📚</span>
            <div>
              <strong>Discover Stories</strong>
              <p>Read. Learn. Grow.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
