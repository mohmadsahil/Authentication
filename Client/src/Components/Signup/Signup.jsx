import React, { useState } from 'react'
import styles from "./Signup.module.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = (props) => {

const navigate = useNavigate();

const newUser = {
  name:"",
  email:"",
  password:"",
  repassword:""
}

const[user,setUser] = useState({ newUser })

const handleChanges = (e)=>{
    const {name , value} = e.target;
    setUser({...user,[name]:value});
}

const registerUser = async(e)=>{
      e.preventDefault();
      const{name,email,password,repassword} = user;
      if(name && email && password && (password === repassword))
      {
        alert("Signup Successfully");
        await axios.post("http://localhost:4000/signup",user)
        .then((res)=>{
          navigate("/");
        })
      }
      else{
        alert("Kindly Fill Correct Details");
      }
}

  return (
    <div>
        <div>
            <form className={styles.Signup}>
                <h1>Signup</h1>
                <input type="text" name='name' value={user.name} onChange={handleChanges} placeholder='Name'/>
                <input type="text" name='email' value={user.value} onChange={handleChanges} placeholder='Email'/>
                <input type="password" name='password' value={user.password} onChange={handleChanges} placeholder='Password'/>
                <input type="password" name='repassword' value={user.repassword} onChange={handleChanges} placeholder='Re-Password'/>
                <button className={styles.button} onClick={registerUser} >Signup</button>
                <div>Or</div>
                <button className={styles.button}>Login</button> 
            </form>
        </div>
    </div>
  )
}
