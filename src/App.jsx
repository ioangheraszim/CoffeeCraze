import { useEffect, useState } from "react";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard"

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [filteredCoffeeData, setFilteredCoffeeData] = useState([]);
  const [currentCoffee, setCurrentCoffee] = useState("all");

  const fetchCoffeeData = async () => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
      );
      if(!response.ok) {
        throw new Error(`Failed to fetch coffee from info ${response.statusText}`)
      }
      const data = await response.json();
      console.log(data)
      setCoffeeData(data)
      setFilteredCoffeeData(data);
    } catch (error) {
      console.error("Error fetching coffee info:", error);
    }   
  };

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  const setCoffeeAvailability = (coffeeAvailability) => {
    setCurrentCoffee(coffeeAvailability);
    if (coffeeAvailability === "all") {
      setFilteredCoffeeData(coffeeData);
    } else {
      const filteredData = coffeeData.filter(
        (coffee) => coffee.available === (coffeeAvailability === "available_now")
      );
      setFilteredCoffeeData(filteredData);
    }
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
            <button className="hot-btn" onClick={() => setCoffeeAvailability("all")}>All Products</button>
            <button onClick={() => setCoffeeAvailability("available_now")}>Available Now</button>
          </div>
        </div>
        <div className="coffee-container">
          {filteredCoffeeData.map((coffee) => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
