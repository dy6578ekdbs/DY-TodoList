import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import '../css/login.css';


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
        placeholder='내 별명'
        value={newuser}
        explain={newexplain}
        onChange={(e) => setNewuser(e.target.value)}
        writeExplain={(e) => setnewExplain(e.target.value)}
        onSubmit={onSubmitUser}
        /> 

        :
        <> 
        
        <div className="text-container">
          <span>{user}</span>
          <span>{explain}</span>
          <p>로 로그인 할까요?</p>
        </div>

        <div className="buttons">
        <Link type="button" className="check-btn"  to="/home">네</Link>
        
        <Link type="button" className="check-btn" onClick={()=>LogOut()} to="/">아뇨</Link>
        </div>
        </>
        }

    </>
);
};

export default User;
