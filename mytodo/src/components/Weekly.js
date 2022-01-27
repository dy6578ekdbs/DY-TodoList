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
  
 

  let now = new Date();

  let year = now.getFullYear(); // 오늘 년도
  let month = now.getMonth() + 1; // 오늘 월
  let date = now.getDate(); // 오늘 날짜
  let today = now.getDay(); // 오늘 요일
  let start = date - today + 1; //이번주 시작 날짜
  

  function getWeekOfMonth(now) {
        var _date = now.getDate();
        var _dayOfWeek = now.getDay();
    	    return parseInt((6 + _date - _dayOfWeek) / 7) + 1;
    	}

  let weekNum = getWeekOfMonth(now); // 이번주 몇째주
    
  let test = new Date(year,month,0); // 이번달 마지막 날짜 구하기
  let last = test.getDate();
  console.log(last);


  let dateArray = [];
  let i;
  let a = 1;
  for(i=0;i<7;i++){
    if(start + i > last){
      dateArray.push(a);
      a++;
    }else{
      dateArray.push(start + i);
    }
  }

  const dayArray = ["mon","tue","wen","thr","fri","sat","sun"];

  const [settingday,setSettingDay] = useState(dayArray[today]);

  console.log(settingday);

  return(
        <>
    
        <p>오늘은 {year}년 {month}월 {weekNum}째주 입니다.</p>

         <ul className='week'>
       
          <li id='week-day' onClick={() =>setSettingDay("mon")}>
            <p id="day">월</p>
            <i class="fas fa-paw"></i>
            <p id="date">{dateArray[0]}</p>
          </li>
  
          <li id='week-day' onClick={() =>setSettingDay("tue")} >
            <p id="day">화</p>
            <i class="fas fa-paw"></i>
            <p id="date">{dateArray[1]}</p>
          </li>
        
        <li id='week-day' onClick={() =>setSettingDay("wen")}>
            <p id="day">수</p>
            <i class="fas fa-paw"></i>
            <p id="date">{dateArray[2]}</p>
          </li>
         
       
        <li id='week-day' onClick={() =>setSettingDay("thu")}>
            <p id="day">목</p>
            <i class="fas fa-paw"></i>
            <p id="date">{dateArray[3]}</p>
          </li>
       
        <li id='week-day' onClick={() =>setSettingDay("fri")}>
            <p id="day">금</p>
            <i class="fas fa-paw"></i>
            <p id="date">{dateArray[4]}</p>
          </li>
        
        <li id='week-day' onClick={() =>setSettingDay("sat")}>
            <p id="day">토</p>
            <i class="fas fa-paw"></i>
            <p id="date">{dateArray[5]}</p>
          </li>
        
        <li id='week-day' onClick={() =>setSettingDay("sun")}>
            <p id="day">일</p>
            <i class="fas fa-paw"></i>
            <p id="date">{dateArray[6]}</p>
          </li>
        
      </ul>


      <Mon settingday={settingday}/>

        </>
    );
};

export default Weekly;