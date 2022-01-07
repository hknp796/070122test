import React,{useState} from "react";
import {Link,Navigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
const link = "http://localhost:5000/login";
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

async function submitLogin (e){
  e.preventDefault()
    await axios.post(link,{
        email,password
    })
    axios.get(link).then((result) => {
      console.log(result.data);
    });
}

  return (
<div>
    <h1>Login</h1>
    <form onSubmit={submitLogin}>
    <label htmlFor="">Email</label>
    <input type="text" onChange={(e)=>setEmail(e.target.value)} required/><br/>
    <label htmlFor="">Password</label>
    <input type="text" onChange={(e)=>setPassword(e.target.value)} required/><br/>
    <input type='submit' value="Login" />
    </form>
    <Link to="/registration" >Registration </Link>
</div>
  )


};

export default Login;
