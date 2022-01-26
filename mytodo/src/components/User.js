import React, {useState,useEffect} from "react";
import UserForm from "./UserForm";
const User = ({
  
}) => {
    
  const loadedUser = JSON.parse(localStorage.getItem("user"));
  const [user,setUser] = useState(loadedUser);
  const [newuser, setNewuser] = useState('');

  const loadedExplain = JSON.parse(localStorage.getItem("explain"));
  const [explain, setExplain] = useState(loadedExplain);
  const [newexplain, setnewExplain] = useState('');

  
  const [login, setLogin] = useState(false);

  useEffect(()=> {
    if(loadedUser === null){
      setLogin(!login);
    }
  },[]);
  

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("explain", JSON.stringify(explain));
  },[user,explain])
  
  const onSubmitUser = (event) => {
   
    setUser(newuser);
    setNewuser('');
    setExplain(newexplain);
    setnewExplain('');
  }

  const LogOut =()=>{
    setLogin(!login);
    localStorage.removeItem("user");
    localStorage.removeItem("explain");
  }

return(
    <>
    {login ? 
      
      <UserForm
        type='text'
        placeholder='username'
        value={newuser}
        explain={newexplain}
        onChange={(e) => setNewuser(e.target.value)}
        writeExplain={(e) => setnewExplain(e.target.value)}
        onSubmit={onSubmitUser}
        /> 
        

        :
        <> 
        <p>{user} {explain}</p>
        <button type="button" className={"btn btn-warning"} onClick={()=>LogOut()}>Logout</button>
        </>
        }

    </>
);
};

export default User;
