import React, { useEffect } from 'react'
import axios from 'axios'
const Logout = () => {
    useEffect(()=>{
        if(window.localStorage.getItem('token')===null)
        window.location.replace('http://localhost:3000/Login')
    },[])
    const handleclick=async()=>{
      await  axios.post('/user', {
            headers:{
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': localStorage.getItem('token')
       // Authorization: `token ${localStorage.getItem('token')}`
            }
          })
          .then(function (response) {
            console.log(response);
            window.localStorage.clear()
            window.location.replace('http://localhost:3000/Login')
            
          })
          .catch(function (error) {
            console.log(error);
          
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