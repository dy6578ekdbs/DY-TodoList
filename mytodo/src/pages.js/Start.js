import React from "react";
import '../css/start.css';
import imgTodo from '../img/todo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";
const Start =()=> {
 
    return(
        <div className="container">

            <img src={imgTodo} height="200px" width="200px"/>

            <h1>todo mate</h1>
            <p>할 일을 작성, 계획, 관리하세요.</p>

        <Link to="/login" id="start-login"><button>시작하기</button></Link>
        </div>
    );
}

export default Start;