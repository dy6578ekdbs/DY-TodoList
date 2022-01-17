import React, { useEffect, useState } from 'react';
import routes from './routes';
import './App.css';
import User from './components/User'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  
  const loadedUser = JSON.parse(localStorage.getItem("user"));
  const [user,setUser] = useState(loadedUser);

  const [login, setLogin] = useState(false);

  useEffect(()=> {
    if(loadedUser === null){
      setLogin(!login);
    }
  },[]);
  
  
  const [newuser, setNewuser] = useState('');

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(user));
  },[user])
  
  const onSubmitUser = (event) => {
  
    setUser(newuser);
    setNewuser('');
  }

  
  return (
    <>
    
      
      
      <Router>

      <ul>
        <li><Link className="navbar-brand" to="/">Todo</Link> </li>
        <li><Link className="navbar-brand" to="/calendar">Cal</Link></li>
        <li>더보기</li>
      </ul>

      <p>Name</p>

      {login ? 
      <User 
        type='text'
        placeholder='username'
        value={newuser}
        onChange={(e) => setNewuser(e.target.value)}
        onSubmit={onSubmitUser}
        /> 
        : <p>{user}</p>}
      


      <p>이번주 달력</p>


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
