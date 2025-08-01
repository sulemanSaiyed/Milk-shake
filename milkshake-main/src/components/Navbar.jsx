import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Milk Hsake Shop</h1>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#flavours">Flavours</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
