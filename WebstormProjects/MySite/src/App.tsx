import React from 'react';
import './App.css';

function App() {
  return (
      <div className={"ui info message"}>
        <i className={"close icon"}></i>
        <div className="header">
          Was this what you wanted?
        </div>
        <ul className="list">
          <li>It's good to see you again.</li>
          <li>Did you know it's been a while?</li>
        </ul>
      </div>
  );
}

export default App;
