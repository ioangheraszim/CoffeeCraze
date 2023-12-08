import { useEffect, useState } from "react";
import "./App.css";
import CoffeeCard from "./components/coffeeCard";

function App() {
  const [coffeeData, setCoffeeData] = useState([]);

  const fetchCoffeeData = async () => {
    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await response.json();
    console.log(data);
    setCoffeeData(data);
  };

  useEffect(() => {
    fetchCoffeeData();
  }, []);
  return (
    <>
      <section className="container info-container">
        <div className="info">
          <div className="the-vector"></div>
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="button-container">
            <button>All Products</button>
            <button>Available Now</button>
          </div>
        </div>
        <div className="coffee-container">
          {coffeeData.map((coffee) => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
