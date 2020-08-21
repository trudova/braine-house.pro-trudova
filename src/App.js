import React from 'react';
import './App.css';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Solutions/>
    </div>
  );
}

export default App;
