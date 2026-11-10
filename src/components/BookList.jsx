
import React from "react";
import BookCard from "./BookCard";

function BookList({
  books,
  loading,
  onAddToCart,
  searchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "Fiction",
    "Mystery",
    "Romance",
    "Science",
    "Self-Help",
    "Fantasy",
  ];

  const filteredBooks = books.filter((book) => {
    const category = book.category.toLowerCase();

    if (selectedCategory === "All") {
      return true;
    }

    return category.includes(selectedCategory.toLowerCase());
  });

  return (
    <section className="books-section" id="books">

      <div className="section-heading">
        <span className="section-tag">OUR COLLECTION</span>
        <h2>
          Featured <span>Books</span>
        </h2>
        <p>
          Find the perfect book for your next reading adventure.
        </p>
      </div>

      <div className="books-toolbar">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {searchTerm && (
        <p className="search-results">
          Search results for: <strong>{searchTerm}</strong>
        </p>
      )}

      {loading ? (
        <div className="loading-message">
          <div className="loader"></div>
          <p>Discovering amazing books...</p>
        </div>
      ) : filteredBooks.length > 0 ? (

        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      ) : (

        <div className="empty-message">
          <h3>No Books Found!</h3>
          <p>
            Try another search or select a different category.
          </p>

          <button
            className="primary-btn"
            onClick={() => setSelectedCategory("All")}
          >
            Show All Books
          </button>
        </div>

      )}

    </section>
  );
}

export default BookList;
