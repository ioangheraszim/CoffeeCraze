import React from 'react'

function CoffeeCard({id,description, image, title }) {
  return (
    <>
        <div className="coffee-card">
            <div className="image-container">
                <img src={image} alt={title} />
                <p className="popular-tag">{id}</p>
            </div>
            <div className="title-price">
                <p className="coffee-title">{title}</p>
            </div>
            <div className="votes">
                <p>{description}</p>
            </div>
        </div>
    
    </>
  )
}

export default CoffeeCard