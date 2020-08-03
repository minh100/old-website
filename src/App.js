import React from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="welcome" className="Welcome-page" >
        <h1 >Welcome</h1>
      </div>
      <About />
      <Project />
      <Contact />
    </div>

  );
}

export default App;
