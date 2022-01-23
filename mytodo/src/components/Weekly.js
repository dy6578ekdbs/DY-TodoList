import React,{useEffect, useState} from "react";
import Mon from '../pages.js/Mon';
import routes from '../routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Weekly = (
  
) => {
  
  const [settingday,setSettingDay] = useState("mon");
  
  const weekArray = ["일","월","화","수","목","금","토"];
  let now = new Date();
  let year = now.getFullYear();
 
  let month = now.getMonth() + 1; // 1월
  let date = now.getDate(); // 21일 - 5 + 1 = 17
  let today = now.getDay(); // 오늘 요일 5(금)
  let monday = date - today + 1; // 17일

  function getWeekOfMonth(now) {
        var _date = now.getDate();
        var _dayOfWeek = now.getDay();
  	     
    	    return parseInt((6 + _date - _dayOfWeek) / 7) + 1;
    	}

      let weekNum = getWeekOfMonth(now);
    
  
     
    return(
        <>
    
        <p>오늘은 {year}년 {month}월 {weekNum}째주 입니다.</p>
         <ul className='week'>
        <Link className="weekly-button" to="/schedul-mon">
          <li id='week-day' onClick={() =>setSettingDay("mon")}>
            <p id="day">월</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday}</p>
          </li>
          </Link>
        
          <li id='week-day' onClick={() =>setSettingDay("tue")} >
            <p id="day">화</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +1}</p>
          </li>
        
        <li id='week-day' onClick={() =>setSettingDay("wen")}>
            <p id="day">수</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +2}</p>
          </li>
         
       
        <li id='week-day' onClick={() =>setSettingDay("thu")}>
            <p id="day">목</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +3}</p>
          </li>
       
        <li id='week-day' onClick={() =>setSettingDay("fri")}>
            <p id="day">금</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +4}</p>
          </li>
        
        <li id='week-day' onClick={() =>setSettingDay("sat")}>
            <p id="day">토</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +5}</p>
          </li>
        
        <li id='week-day' onClick={() =>setSettingDay("sun")}>
            <p id="day">일</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +6}</p>
          </li>
        
      </ul>


      <Mon settingday={settingday}/>

        </>
    );
};

export default Weekly;