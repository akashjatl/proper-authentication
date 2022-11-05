import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const Signup = () => {
    const[firstname,setfisrtname]=useState('')
    const[lastname,setlastname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[reenterpassword,setreenter]=useState('')
    const[errmsg,seterrmsg]=useState('')
    const errref=useRef(0)
    const start=useRef()
    function post(){
        axios.post('/user', {
           firstname:{firstname},
           lastname:{lastname},
           username:{email},
            password: {password}
          })
          .then(function (response) {
            console.log(response);
            window.location.replace("http://localhost:3000/Login")
          })
          .catch(function (error) {
            console.log(error);
            seterrmsg('Login failed')
          });
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log('i am in');
        password!==reenterpassword ? (seterrmsg('both the password are different')):
        (
            post()
        )
    }
    useEffect(()=>{
        errref.current.focus()
    },[errmsg])
    useEffect(()=>
    {
        start.current.focus()
    },[])
  return (
    <div style={{display:"flex",flexDirection:"column",width:"10%",marginLeft:"10%"}} >
        <form onSubmit={handlesubmit}>
        {errmsg && <p>{errmsg}</p> }
        <label>Firstname</label>
        <input type={'text'} onChange={(e)=>setfisrtname(e.target.value)} ref={start}></input>
        <label>Last name</label>
        <input type={'text'}  onChange={(e)=>setlastname(e.target.value)}></input>
        <label>Email Address</label>
        <input type={'email'}  onChange={(e)=>setemail(e.target.value)}></input>
        <label>Password</label>
        <input type={'password'}  onChange={(e)=>setpassword(e.target.value)}></input>
        <label>Re-enter password</label>
        <input type={'password'}  onChange={(e)=>setreenter(e.target.value)} ref={errref}></input>
        <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup