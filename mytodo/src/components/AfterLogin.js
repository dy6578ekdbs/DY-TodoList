import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";



const AfterLogin = () => {
    
  const loadedUser = JSON.parse(localStorage.getItem("user"));

  const loadedExplain = JSON.parse(localStorage.getItem("explain"));

  const LogOut =()=>{
  
    localStorage.removeItem("user");
    localStorage.removeItem("explain");
  }

return(
    <>
    <div>{loadedUser}</div>
    <div>{loadedExplain}</div>
    <Link type="button" className={"btn btn-warning"} onClick={()=>LogOut()} to="/">LogOut</Link>
  
    </>
);
};

export default AfterLogin;
