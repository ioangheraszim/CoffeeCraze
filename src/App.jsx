import { useEffect, useState } from "react";
import "./App.css";
import CoffeeCard from "./components/coffeeCard";

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [currentCoffee, setCurrentCoffee] = useState("hot");
  const fetchCoffeeData = async () => {
    const response = await fetch(
      `https://api.sampleapis.com/coffee/${currentCoffee}`
    );
    const data = await response.json();
    console.log(data);
    setCoffeeData(data);
  };

  useEffect(() => {
    fetchCoffeeData();
  }, [currentCoffee]);

  const setCoffeeType = (coffeeType) => {
    setCurrentCoffee(coffeeType);
  };

  return (
    <>
      <section className="container info-container">
        <div className="info">
          <div className="the-vector"></div>
          <h1>Our Collection</h1>
          <p>
            Introducing Coffee Craze, a selection of unique coffees from
            different roast types and origins, expertly roasted in small batches
            and shipped fresh weekly.
          </p>
          <div className="button-container">
            <button className="hot-btn" onClick={() => setCoffeeType("hot")}>Hot Coffees</button>
            <button onClick={() => setCoffeeType("iced")}>Ice Coffees</button>
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
