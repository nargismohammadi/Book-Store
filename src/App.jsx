
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import { fetchBooks } from "./services/bookApi";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
      setLoading(false);
    };

    loadBooks();
  }, []);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) =>
      prevCart.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="app">
      <Navbar
        cartCount={cart.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Home
        books={books}
        loading={loading}
        onAddToCart={addToCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Cart cart={cart} onRemove={removeFromCart} />

      <Footer />
    </div>
  );
}

export default App;
