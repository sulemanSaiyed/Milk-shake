import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar=()=> {
  return (
   <div className="navbar">
<div>
  <h3 className="logo">ChillDV</h3>

</div>

<div className="nav-items">


  <p >MilkShakes</p>
  <p >About</p>
  <p >Contact</p>
  <p >Milk Shop</p>
  
  
</div>
<div className="icon">
  <GiHamburgerMenu size={24}/>
</div>
   </div>
  );
}

export default Navbar;
