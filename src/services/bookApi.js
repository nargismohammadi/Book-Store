
const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    description: "A practical guide to building good habits, breaking bad ones, and making small changes that lead to remarkable results.",
    category: "Self-Help",
    rating: 4.8,
    price: 15.99,
    currency: "USD",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "An inspiring story about following your dreams, discovering your purpose, and listening to your heart.",
    category: "Fiction",
    rating: 4.7,
    price: 12.99,
    currency: "USD",
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A timeless novel about love, wealth, ambition, and the American Dream in the 1920s.",
    category: "Fiction",
    rating: 4.5,
    price: 11.99,
    currency: "USD",
    image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
  },
  {
    id: 4,
    title: "Harry Potter",
    author: "J. K. Rowling",
    description: "Enter a magical world of friendship, adventure, mystery, and unforgettable characters.",
    category: "Fantasy",
    rating: 4.9,
    price: 18.99,
    currency: "USD",
    image: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg"
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Discover how people think about money and learn timeless lessons about wealth and financial decisions.",
    category: "Self-Help",
    rating: 4.6,
    price: 14.99,
    currency: "USD",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    id: 6,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A psychological thriller about a woman who stops speaking after a shocking crime and the mystery behind her silence.",
    category: "Mystery",
    rating: 4.7,
    price: 13.99,
    currency: "USD",
    image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg"
  }
];

export const fetchBooks = async () => books;
