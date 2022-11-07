import React, { useEffect } from 'react'
import axios from 'axios'
const Logout = () => {
    useEffect(()=>{
        if(window.localStorage.getItem('token')===null)
        window.location.replace('http://localhost:3000/Login')
    },[])
    const handleclick=async()=>{
    await  fetch('https://example.com/profile', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    localStorage.clear()
    window.location.replace('http://localhost:3000/Login')
  })
  .catch((error) => {
    console.error('Error:', error);
  });

    }
    
  return (
    <div>
        <p>Are you sure you want to Logout</p>
        <button onClick={handleclick}>Logout</button>
    </div>
  )
}

export default Logout