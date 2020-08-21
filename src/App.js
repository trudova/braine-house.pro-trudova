import React from 'react';
import './App.css';
import Home from './pages';
import Solutions from './pages/Solutions'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Home/>
      <Solutions/>
    </div>
  );
}

export default App;
