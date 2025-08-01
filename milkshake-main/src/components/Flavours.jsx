import React from 'react';
import './Flavours.css';

function Flavours() {
  const flavourList = [
    { name: 'Chocolate', image: '/images/choclate.png' },
    { name: 'Coffee', image: '/images/coffee.png' },
    { name: 'Pista', image: '/images/pista.png' },
    { name: 'Strawberry', image: '/images/straw.png' },
    { name: 'Special Mix', image: '/images/one.png' },
  ];

  return (
    <section className="flavours" id="flavours">
      <h2>Our Flavours</h2>
      <div className="flavour-grid">
        {flavourList.map((item, index) => (
          <div className="flavour-card" key={index}>
            <img src={item.image} alt={item.name} className="flavour-img" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flavours;
