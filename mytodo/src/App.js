import React, { useEffect, useState,useRef } from 'react';
import './App.css';
import User from './components/User'
import Weekly from './components/Weekly'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";


function App() {

  const modalEl = useRef(); // 
  const [isOpen, setOpen] = useState(false);
  
 const [style,setStyle] = useState('');

  const openMenu = () => {
    setOpen(true);
    setStyle("slide");
  }
  
  const closeMenu = () =>{
    setOpen(false);
    setStyle('');
  }

  return (
    <div id="body" className={`${style}`}>
    <Router>
    
    
    <navbar >
       <i class="far fa-heart fa-lg"></i>
       <i class="fas fa-inbox fa-lg"></i>
       <i class="fas fa-bars fa-lg" onClick={()=> openMenu()}></i>
    </navbar> 

    <button id="user-button" type="button" class="btn btn-outline-secondary">O</button>
    <button id="user-button" type="button" class="btn btn-outline-secondary">+</button>
    
    {
      isOpen ?

      <menu ref={modalEl}>
        <a>설정</a>
        <a>목표</a>
        <a>간편 입력</a>
        <a>보관함</a>
        <a onClick={()=> closeMenu()}>뒤로가기</a>
      </menu> 
      
      : <></>
    }


   
   
      <User />

      
      <Weekly />
    
 
      
      
    </Router>
    </div>
  );
}

export default App;
