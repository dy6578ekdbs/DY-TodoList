import React, { useEffect, useState } from 'react';
import './App.css';
import User from './components/User'
import Weekly from './components/Weekly'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <>
    <Router>

      <User />

      
      <Weekly />
    
      {/* <Switch>
                {routes.map(route => {
                  return(
                    <Route path={route.path} key={route.path} exact>
                      <route.component settingday={settingday}/>
                    </Route>
                  )
                })}
      </Switch> */}
      
      


    </Router>
    </>
  );
}

export default App;
