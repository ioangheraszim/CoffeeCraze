import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <section className="hero-image"></section>
      <section className="container info-container">
        <div className="info">
            <h1>Our Collection</h1>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
            <div>
              <button>All Products</button>
              <button>Available Now</button>
            </div>
        </div>
        <div className="coffee-container">
          <div className="cofee-card">
            <div>
              <img src="" alt="" />
              <p className="popular-tag">Popular</p>
            </div>
            <div>
              <p>Cappuccino</p>
              <p>$5.20</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>4.7 <span>(65 votes)</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
