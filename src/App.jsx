import { useEffect, useState } from "react";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard"

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [currentCoffee, setCurrentCoffee] = useState("hot");
  const fetchCoffeeData = async () => {
    try {
      const response = await fetch(
        `https://api.sampleapis.com/coffee/${currentCoffee}`
      );
      if(!response.ok) {
        throw new Error(`Failed to fetch coffee from info ${response.statusText}`)
      }
      const data = await response.json();
      setCoffeeData(data);
    } catch (error) {
      console.error("Error fetching coffee info:", error);
    }   
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
