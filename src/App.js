import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div class="Titel">
        List todo
        <ul className="todolist">
          <li clasName="items">
            Go to School
          </li>
          <li clasName="items">
            Go to Home
          </li>
          <li clasName="items">
            Go to Bed
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
