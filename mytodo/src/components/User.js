import React from "react";
const User = ({
    onSubmit,
    text,
    placeholder,
    value,
    onChange,
}) => {
return(
    <>
     <form onSubmit={onSubmit}>
      <input type={text} placeholder={placeholder} value={value} onChange={onChange}/>
      <br />
      <button type='submit'>로그인</button>
    </form>
    </>
);
};

export default User;
