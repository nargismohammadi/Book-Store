
import React from "react";
import Hero from "../components/Hero";
import BookList from "../components/BookList";

function Home({
  books,
  loading,
  onAddToCart,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <main>
      <Hero />

      <BookList
        books={books}
        loading={loading}
        onAddToCart={onAddToCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </main>
  );
}

export default Home;
