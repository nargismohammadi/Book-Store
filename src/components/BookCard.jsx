
import React from "react";

function BookCard({ book, onAddToCart }) {
  return (
    <div className="book-card">

      <div className="book-image">
        <img
          src={book.image}
          alt={book.title}
          loading="lazy"
        />

        {book.rating > 0 && (
          <span className="book-rating">
            ★ {book.rating}
          </span>
        )}
      </div>

      <div className="book-details">

        <span className="book-category">
          {book.category.split("/")[0]}
        </span>

        <h3>{book.title}</h3>

        <p className="book-author">
          by {book.author}
        </p>

        <div className="book-bottom">

          <div className="book-price">
            {book.price.toFixed(2)} {book.currency}
          </div>

          <button
            className="add-cart-btn"
            onClick={() => onAddToCart(book)}
            aria-label={`Add ${book.title} to cart`}
          >
            +
          </button>

        </div>

      </div>
    </div>
  );
}

export default BookCard;
