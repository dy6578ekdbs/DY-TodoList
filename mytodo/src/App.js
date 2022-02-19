import React, { useEffect, useState,useRef } from 'react';
import './App.css';

import Home  from './pages.js/Home';
import Login from './pages.js/Login';
import Start from './pages.js/Start';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";


function App() {


  return (

    <Router>

      <Switch>
        
    <Route path='/' exact> <Start/> </Route>
    <Route path='/login' exact><Login /></Route>
    <Route path='/home' exact> <Home /> </Route>
    
      </Switch>


    </Router>
  );
}

export default App;
