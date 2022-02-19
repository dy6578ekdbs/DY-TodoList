import React from "react";

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
     <form onSubmit={onSubmit}>
        
      <input required minlength="1" type={text} placeholder={placeholder} value={value} onChange={onChange}/>
      <span>님의 이름</span>
      
      <input required minlength="1" type={text} placeholder='설명' value={explain} onChange={writeExplain}/>
        <span>설명쓰세요</span>
     <button type="submit" class="btn btn-warning"  >Login</button>
    </form>

    </>
);
};

export default UserForm;
