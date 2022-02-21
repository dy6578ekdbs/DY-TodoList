import React from "react";
import '../css/userform.css';

import {Link} from 'react-router-dom';

const UserForm = ({
    onSubmit,
    text,
    placeholder,
    value,
    onChange,
    explain,
    writeExplain,
}) => {

return(
    <>
     <form onSubmit={onSubmit} className="login-form">
        
      <input required minlength="1" type={text} placeholder={placeholder} value={value} onChange={onChange}/>
     
      
      <input required minlength="1" type={text} placeholder='내 소개' value={explain} onChange={writeExplain}/>
        
     <button type="submit" id="login-form-button">로그인</button>
    </form>

    </>
);
};

export default UserForm;
