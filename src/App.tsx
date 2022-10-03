import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.tsx/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/store" element={<Store/>} />
      </Routes>
    </div>
  );
}

export default App;
