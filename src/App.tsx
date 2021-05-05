import React from 'react';
import logo from './logo.svg';
import { Summ } from "@slices/utils"
import { Text } from "@slices/ui"
import './App.css';

function App() {
  const s = Summ(1, 2);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>{s}</div>
        <Text />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
