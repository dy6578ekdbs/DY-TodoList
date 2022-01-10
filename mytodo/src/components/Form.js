import React from "react";
const Form = ({
    text,
    placeholder,
    value,
    onChange,
    onSubmit,

}) => {
return(
    <>
     <form onSubmit={onSubmit}>
      <input type={text} placeholder={placeholder} value={value} onChange={onChange}/>
      <br />
      <button type='submit'>투두 작성</button>
    </form>
    </>
);
};

export default Form;
