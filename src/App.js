import React from 'react';

function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedIn = true;
  return(
    <div>
      <h1>ENSF 381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>The current year is: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome Back" : "Please log in" }</p>
    </div> 
  );
}

export default App;