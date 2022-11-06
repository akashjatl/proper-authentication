import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [name,setname]=useState('')
  const [img,setimage]=useState('')
  useEffect(()=>{
    if(window.localStorage.getItem('token')===null)
    window.location.replace('http://localhost:3000/Login')
  },[])
   async function get(){
    axios({
      method: 'get',
      url: 'http://bit.ly/2mTM3nY',
      responseType: 'stream'
      }
    )
      .then(function (response) {
        setname(response.data.name)
        setimage(response.data.image)

       
      });
   }
  return (
    <div>
        Hi {name}
        <img src={img} alt=''/>
    </div>
  )
}

export default Dashboard