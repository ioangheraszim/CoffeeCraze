import React from 'react'

function CoffeeCard({id, description, image, ingredients, title }) {
  return (
    <>
        <div className="coffee-card">
            <div className="image-container">
            <img src={image} alt={title} />
            <p className="popular-tag">Popular</p>
            </div>
            <div className="title-price">
            <p className="coffee-title">{title}</p>
            <p className="coffee-price">$5.20</p>
            </div>
            <div className="votes">
                <p>4.7 <span>(65 votes)</span></p>
            </div>
        </div>
    
    </>
  )
}

export default CoffeeCard