import React from "react";
import starActive from "../assets/pictures/Star_fill.svg";
import starInactive from "../assets/pictures/Star.svg";
function CoffeeCard({ available, image, name, popular, price, rating, votes }) {
  return (
    <>
      <div className="coffee-card">
        <div className="image-container">
          <img src={image} alt={name} />
          <p className={popular ? `popular-tag` : ""}>
            {popular ? "Popular" : ""}
          </p>
        </div>
        <div className="title-price">
          <p className="coffee-title">{name}</p>
          <p className="coffee-price">{price}</p>
        </div>
        <div className="votes">
          <div className="ratings">
            <img src={rating <= 0 ? starInactive : starActive} alt="star image" />
            <p className="rating-text">{rating <= 0 ? "No Ratings" : rating}</p>
            <span>{rating <= 0 ? "" : `(${votes} votes)`}</span>
          </div>
          <p className="availability">{available ? "" : "Sold Out"}</p>
        </div>
      </div>
    </>
  );
}

export default CoffeeCard;
