import React, { useEffect, useState } from 'react'
import styles from "./Login.module.css"
import axios from "axios"

export const Login = () => {

  const newUser = {
    email:"",
    password:""
  }
  
  const [user,setUser] = useState({newUser})
  const handleChanges = (e)=>{
      const {name , value} = e.target;
      setUser({...user,[name]:value});
      console.log(value);
  }
  

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <input type="text" name="email" value={user.email} placeholder='Name' onChange={handleChanges}/>
      <input type="password" name='password' value={user.password} placeholder='Password' onChange={handleChanges}/>
      <button className={styles.button} >Login</button>
      <div>Or</div>
      <button className={styles.button} >Signup</button>
    </div>
  )
}
