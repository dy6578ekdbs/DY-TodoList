import React, { useEffect, useState,useRef } from 'react';
import AfterLogin from '../components/AfterLogin';
import '../css/home.css';
import Weekly from '../components/Weekly'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


const Home =()=> {


    const modalEl = useRef();
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
    const LogOut =()=>{
  
      localStorage.removeItem("user");
      localStorage.removeItem("explain");
    }
  
    return (
  
      
  
      <div className={`${style}`} id='home-container'>
        
      
      
      <navbar>
         <i class="far fa-heart fa-lg"></i>
         <i class="fas fa-inbox fa-lg"></i> 
         <i class="fas fa-bars fa-lg" onClick={()=> openMenu()}></i>
      </navbar> 
  
      <button id="user-button" type="button" class="btn btn-outline-secondary">M</button>
      <button id="user-button" type="button" class="btn btn-outline-secondary">></button>
      
      {
        isOpen ?
  
        <menu ref={modalEl}>
          <a>설정</a>
          <a>목표</a>
          <a>간편 입력</a>
          <a>보관함</a>
          <Link to="/" type="button" onClick={()=>LogOut()}>로그아웃</Link>
          <a onClick={()=> closeMenu()}>뒤로가기</a>
        </menu> 
        
        : <></>
      }
  
  
     
     
        <AfterLogin />
  
        
        <Weekly />
      
   
        
        
      </div> );
  
}

export default Home;