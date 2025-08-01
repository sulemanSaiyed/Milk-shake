import React from 'react';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Flavours from './components/Flavours';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
 <Hero/>
 <Flavours/>
 <About/>
 <Footer/>
    </>
  );
}

export default App;
