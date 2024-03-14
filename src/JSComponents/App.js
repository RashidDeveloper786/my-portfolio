// App.js

import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

