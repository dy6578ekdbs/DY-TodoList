import React from "react";
import User from "../components/User";
import '../css/login.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";

const Login =()=> {
    return(

        <div className="container">
            <nav>
                <Link to="/"><i class="fa-solid fa-angle-left"></i></Link>
                
                <span>로그인</span>
            </nav>            
            
            
           
            <User />

        
        </div>
    );
}

export default Login;