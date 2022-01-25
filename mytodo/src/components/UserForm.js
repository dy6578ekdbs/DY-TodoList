import React from "react";
const UserForm = ({
    onSubmit,
    text,
    placeholder,
    value,
    onChange,
}) => {
return(
    <>
     <form onSubmit={onSubmit}>
      <input required minlength="1" type={text} placeholder={placeholder} value={value} onChange={onChange}/>
      <br />
      <button type="submit" class="btn btn-warning">Login</button>
    </form>
    </>
);
};

export default UserForm;
