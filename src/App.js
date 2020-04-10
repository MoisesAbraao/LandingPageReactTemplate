import React from 'react';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import './App.css';


function App() {
  return (
      <>
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </>
  );
}

export default App;
