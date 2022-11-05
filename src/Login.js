import React from 'react'
import {useState} from 'react'
const Login = () => {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
  return (
    <div>
        <input type={'email'}></input>
        <br></br>
        <input type={'password'}></input><br></br>
        <button>Login</button>
    </div>
  )
}

export default Login