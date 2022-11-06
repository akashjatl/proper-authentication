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
   async function post(){
       await axios.post('/user', {
           firstname:{firstname},
           lastname:{lastname},
           username:{email},
            password: {password},
            img:{img},
            headers:{
              'Content-Type': 'application/json',
      Authorization: `token ${localStorage.getItem('token')}`
          }
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
    const handleimage=(e)=>{
        setimg(URL.createObjectURL(e.target.files[0]));
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
        <input type={'text'} onChange={(e)=>setfisrtname(e.target.value)} ref={start} required></input>
        <label>Last name</label>
        <input type={'text'}  onChange={(e)=>setlastname(e.target.value)}></input>
        <label>Email Address</label>
        <input type={'email'}  onChange={(e)=>setemail(e.target.value)} required></input>
        <label>Password</label>
        <input type={'password'}  onChange={(e)=>setpassword(e.target.value)} required></input>
        <label>Re-enter password</label>
        <input type={'password'}  onChange={(e)=>setreenter(e.target.value)} ref={errref} required></input>
        <input type={'file'} img src={img} onChange={handleimage}></input>
        <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup