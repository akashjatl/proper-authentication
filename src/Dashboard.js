import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [name,setname]=useState('')
  const [img,setimage]=useState('')
  useEffect(()=>{
    if(window.localStorage.getItem('token')===null){
    window.location.replace('http://localhost:3000/Login')}
     
    (async()=>{
      console.log('enetered')
      const response = await fetch(
        "http://127.0.0.1:8000/account/user/"
      ).then((response) => response.json());
      console.log(response.data)
      setname(response.data.name)
      
    })()
  },[])
  return (
    <div>
        Hi I am an Idiot{name}
        {/* <img src={img} alt=''/> */}
    </div>
  )
}

export default Dashboard