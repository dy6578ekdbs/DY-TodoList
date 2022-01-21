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

      <div>
      <ul className='week'>
        <li id='week-day'><Link className="weekly-button" to="/schedul-mon">월</Link></li>
        <li id='week-day'><Link className="weekly-button" to="/schedul-tue">화</Link></li>
        <li id='week-day'><Link className="weekly-button" to="/schedul-wen">수</Link></li>
        <li id='week-day'><Link className="weekly-button" to="/schedul-thu">목</Link></li>
        <li id='week-day'><Link className="weekly-button" to="/schedul-fri">금</Link></li>
        <li id='week-day'><Link className="weekly-button" to="/schedul-sat">토</Link></li>
        <li id='week-day'><Link className="weekly-button" to="/schedul-sun">일</Link></li>
      </ul>
    </div>



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
