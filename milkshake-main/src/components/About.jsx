import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>About Us</h2>
      <div className="about-content">
        <img src="/images/b.jpg" alt="About" />
        <p>
          We serve delicious Milk shakes made from fresh ingredients. Our mission is to bring smiles to everyone with our unique and tasty shakes.
        </p>
      </div>
    </section>
  );
}

export default About;
