import React from 'react';
import './App.css';
import Home from './pages/Home';
//import Solutions from './pages/Solutions';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* //<Solutions/> */}
      <Error/>
    </>
  );
}

export default App;
