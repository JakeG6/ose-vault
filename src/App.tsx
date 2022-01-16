import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import CharacterCreator from './components/CharacterCreator/CharacterCreator';
import Home from './components/CharacterCreator/Home';

function App() {
  return (
    <div className=" leather-background min-h-screen ">
      <h1 className="text-white">OSE Character Vault</h1>
      <nav className="bg-lime-100 flex ">
        <Link className="text-2xl ml-2 mr-2" to="/">Home</Link>
        <Link className="text-2xl ml-2 mr-2" to="/chargen">Character Creator</Link>
        <Link className="text-2xl ml-2 mr-2" to="#">My Characters</Link>
      </nav>
      <div className="">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="chargen" element={<CharacterCreator />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
