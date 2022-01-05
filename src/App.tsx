import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>OSE Character Vault</h1>
      <nav>
        <Link to="/chargen">Character Creator</Link> |{" "}

      </nav>
      {/* <CharacterCreator /> */}
    </div>
  );
}

export default App;
