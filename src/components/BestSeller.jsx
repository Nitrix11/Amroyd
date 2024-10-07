import React from 'react';
import"./scss/BestSeller.css"
import b1 from"../assets/b1.jpeg"
import b2 from"../assets/b2.jpeg"
import b3 from"../assets/b9.jpeg"
import b4 from"../assets/b4.jpeg"
import b5 from"../assets/b5.jpeg"
import b6 from"../assets/b6.jpeg"
import b7 from"../assets/b7.jpeg"
import b8 from"../assets/b8.jpeg"
function BestSellers() {
  return (
    <div className="best-sellers">
      <h1>Best Sellers</h1>
      <div className="card-container">
        <div className="card">
          <img src={b1} alt="Best Seller 1" />
          <h3>Shirt 1</h3>
          <p>$20</p>
        </div>
        <div className="card">
          <img src={b2} alt="Best Seller 2" />
          <h3>Shirt 2</h3>
          <p>$30</p>
          <div className="new-badge">New</div>
        </div>
        <div className="card">
          <img src={b3} alt="Best Seller 3" />
          <h3>Pants 1</h3>
          <p>$40</p>
        </div>
        <div className="card">
          <img src={b4} alt="Best Seller 4" />
          <h3>Pants 2</h3>
          <p>$50</p>
          <div className="new-badge">New</div>
        </div>
        <div className="card">
          <img src={b5} alt="Best Seller 5" />
          <h3>Dress 1</h3>
          <p>$60</p>
        </div>
        <div className="card">
          <img src={b6} alt="Best Seller 6" />
          <h3>Dress 2</h3>
          <p>$70</p>
        </div>
        <div className="card">
          <img src={b7} alt="Best Seller 7" />
          <h3>Jacket 1</h3>
          <p>$80</p>
        </div>
        <div className="card">
          <img src={b8} alt="Best Seller 8" />
          <h3>Jacket 2</h3>
          <p>$90</p>
          <div className="new-badge">New</div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;