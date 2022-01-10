import React from 'react';
import routes from './routes';
import './App.css';

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
    <Switch>
            {routes.map(route => {
              return(
                <Route path={route.path} key={route.path} exact>
                  <route.component />
                </Route>
              )
            })}
    </Switch>
    </Router>
    </>
  );
}

export default App;
