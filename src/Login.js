import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
const Login = () => {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [errmsg,seterrormsg]=useState('')
    const handlesubmit =(e)=>{
        e.preventDefault()
         axios.post('/user', {
            username: {username},
            password: {password}
          })
          .then(function (response) {
            console.log(response);
            window.localStorage.clear()
            window.localStorage.setItem('token',response.data)
          })
          .catch(function (error) {
            console.log(error);
            seterrormsg('Login failed')
          });
    }
    useEffect(()=>{
        if(window.localStorage.getItem('token')!==null)
        window.location.replace('http://localhost:3000/Dashboard')
    },[])
  return (
    <div onSubmit={handlesubmit}>
        {errmsg && <p>{errmsg}</p>}
        <input type={'email'} onChange={(e)=>setusername(e.target.value)}></input>
        <br></br>
        <input type={'password'} onChange={(e)=>setpassword(e.target.value)}></input><br></br>
        <button>Login</button>
    </div>
  )
}

export default Login