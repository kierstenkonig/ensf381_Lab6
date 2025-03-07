import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedIn = true;
  return(
    <div>
      <h1>ENSF 381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>The current year is: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome Back!" : "Please log in" }</p>
      <Home title="Home Page" />
      <About title="About Us" />
      <Contact title="Contact Us" />
    </div> 
  );
}

export default App;