import React from "react";
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

            <h1>todo mate</h1>
            <p>할 일을 작성, 계획, 관리하세요.</p>

        <Link to="/login">로그인</Link>
        </div>
    );
}

export default Start;