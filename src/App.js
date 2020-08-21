import React from 'react';
import './App.css';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Navbar from './components/Navbar';
import SinglSolution from './pages/SinglSolution'
import Error from './pages/Error';
import {Route, Switch, Router} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/solutions/' component={Solutions}/>
      <Route exact path='/solutions/:slug' component={SinglSolution}/>
      <Route component={Error}/>
      </Switch>
      
    </>
  );
}

export default App;
