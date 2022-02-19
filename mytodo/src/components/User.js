import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
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

  const Home = () =>{
    window.location.replace="/home";
  }
  
  const onSubmitUser = (event) => {
   
    setUser(newuser);
    setNewuser('');
    setExplain(newexplain);
    setnewExplain('');

    Home();
   
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
        <p>{user} {explain}으로 로그인 하시겠습니까?</p>
        <Link type="button" className={"btn btn-warning"}  to="/home">Yes</Link>
        
        <Link type="button" className={"btn btn-warning"} onClick={()=>LogOut()} to="/">No</Link>
        </>
        }

    </>
);
};

export default User;
