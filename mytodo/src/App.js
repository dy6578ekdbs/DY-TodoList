import React, { useEffect, useState,useRef } from 'react';
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

  const modalEl = useRef(); // 
  const [isOpen, setOpen] = useState(false);


  useEffect(()=>{
    console.log(isOpen);
  })
  
 

  return (
    <>
    <Router>
    

    <navbar >
       <i class="far fa-heart fa-lg"></i>
       <i class="fas fa-inbox fa-lg"></i>
       <i class="fas fa-bars fa-lg" onClick={()=> setOpen(true)}></i>
    </navbar> 

    {
      isOpen ?

      <menu ref={modalEl}>
        <a>link</a>
        <a>에에</a>
        <a onClick={()=> setOpen(false)}>x</a>
      </menu> 
      
      : <></>
    }


   
   
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
