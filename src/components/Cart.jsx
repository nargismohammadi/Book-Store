
import React from "react";

function Cart({ cart, onRemove }) {
  const total = cart.reduce(
    (sum, book) => sum + book.price,
    0
  );

  return (
    <section className="cart-section" id="cart">
      <div className="section-heading">
        <span className="section-tag">YOUR SHOPPING</span>
        <h2>Shopping <span>Cart</span></h2>
        <p>Your selected books are waiting for you.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <span>🛒</span>
          <h3>Your Cart is Empty</h3>
          <p>Add your favorite books to get started.</p>
          <a href="#books" className="primary-btn">
            Explore Books
          </a>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((book, index) => (
              <div className="cart-item" key={`${book.id}-${index}`}>
                <img src={book.image} alt={book.title} />

                <div className="cart-item-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <strong>
                    {book.price.toFixed(2)} {book.currency}
                  </strong>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemove(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="cart-total">
              <span>Total:</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
