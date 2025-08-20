import React from 'react';
import './Hero.css';
import Navbar from "./Navbar";

const Hero=()=> {
  return (
<>
<div className="hero">
  <Navbar/>
  <h2>CHOCOLATESHAKE</h2>


  <div className="hero-text">
  <h3>Creamy ChoclateShake</h3>
  <p>
    Induluge in the rich, valvety texture of our creamy choclate shake
    a dreamy blend of sweetness and cocoa delight.
  </p>
  </div>

</div>
</>
  );
}

export default Hero;
