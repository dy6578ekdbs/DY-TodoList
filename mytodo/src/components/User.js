import React, {useState,useEffect} from "react";
import UserForm from "./UserForm";
const User = ({
  
}) => {
    
  const loadedUser = JSON.parse(localStorage.getItem("user"));
  const [user,setUser] = useState(loadedUser);

  const [login, setLogin] = useState(false);

  useEffect(()=> {
    if(loadedUser === null){
      setLogin(!login);
    }
  },[]);
  
  
  const [newuser, setNewuser] = useState('');

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(user));
  },[user])
  
  const onSubmitUser = (event) => {
  
    setUser(newuser);
    setNewuser('');
  }


return(
    <>
    {login ? 
      
      <UserForm
        type='text'
        placeholder='username'
        value={newuser}
        onChange={(e) => setNewuser(e.target.value)}
        onSubmit={onSubmitUser}
        /> 

        : <p>{user}</p>}

    </>
);
};

export default User;
