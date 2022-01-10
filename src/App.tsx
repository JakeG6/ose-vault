import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import CharacterCreator from './components/CharacterCreator/CharacterCreator';
import Home from './components/CharacterCreator/Home';

function App() {
  return (
    <div className=" grid  ">
      <h1>OSE Character Vault</h1>
      <nav className="bg-lime-100">
        <Link to="/">home</Link> |{" "}
        <Link to="/chargen">Character Creator</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chargen" element={<CharacterCreator />} />
      </Routes>
      {/* <CharacterCreator /> */}
    </div>
  );
}

export default App;
