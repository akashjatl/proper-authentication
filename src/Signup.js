import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const Signup = () => {
    const[firstname,setfisrtname]=useState('')
    const[lastname,setlastname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[reenterpassword,setreenter]=useState('')
    const[errmsg,seterrmsg]=useState('')
    const[img,setimg]=useState('')
    const errref=useRef(0)
    const start=useRef()
    const user={
      // firstname:{firstname},
      // lastname:{lastname},
      username:{email},
       password: {password}
      //  img:{img}
    }
   async function post(){
    await fetch(`${process.env.REACT_APP_API_URL}signup/`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
          window.location.replace('http://localhost:3000/Login')
      })
      .catch((error) => {
        console.error('Error:', error);
        seterrmsg('sign up failed')
      });

    }
    const handleimage=(e)=>{
        setimg(URL.createObjectURL(e.target.files[0]));
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
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
        {/* <label>Firstname</label>
        <input type={'text'} onChange={(e)=>setfisrtname(e.target.value)} value={firstname} ref={start} required></input>
        <label>Last name</label>
        <input type={'text'}  onChange={(e)=>setlastname(e.target.value) value={lastname}}></input> */}
        <label>Username</label>
        <input type={'text'}  onChange={(e)=>setemail(e.target.value)} value={email} required></input>
        <label>Password</label>
        <input type={'password'}  onChange={(e)=>setpassword(e.target.value)} value={password} required></input>
        <label>Re-enter password</label>
        <input type={'password'}  onChange={(e)=>setreenter(e.target.value)} value={reenterpassword} ref={errref} required></input>
        {/* <input type={'file'} img src={img} onChange={handleimage}></input> */}
        <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup