import React from "react";
import routes from '../routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Weekly = (
  
) => {

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
          <li id='week-day'>
            <p id="day">월</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday}</p>
          </li>
          </Link>
        <Link className="weekly-button" to="/schedul-tue">
          <li id='week-day'>
            <p id="day">화</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +1}</p>
          </li>
          </Link>
        <Link className="weekly-button" to="/schedul-wen">
        <li id='week-day'>
            <p id="day">수</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +2}</p>
          </li>
          </Link>
        <Link className="weekly-button" to="/schedul-thu">
        <li id='week-day'>
            <p id="day">목</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +3}</p>
          </li>
          </Link>
        <Link className="weekly-button" to="/schedul-fri">
        <li id='week-day'>
            <p id="day">금</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +4}</p>
          </li>
          </Link>
        <Link className="weekly-button" to="/schedul-sat">
        <li id='week-day'>
            <p id="day">토</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +5}</p>
          </li>
          </Link>
        <Link className="weekly-button" to="/schedul-sun">
        <li id='week-day'>
            <p id="day">일</p>
            <i class="fas fa-paw"></i>
            <p id="date">{monday +6}</p>
          </li>
          </Link>
      </ul>
        </>
    );
};

export default Weekly;