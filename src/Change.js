import axios from 'axios'
import React from 'react'
import { useState } from 'react'
const Change = () => {
    const [password1,setPassword1]=useState('')
    const [password2,setPassword2]=useState('')
    const [oldpassword,setOldpassword]=useState('')
    const user={
        new_password1:password1,
        new_password2:password2,
        old_password:oldpassword
    }
    const handleclick = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/password/change/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

  return (
    <div>
        <input type={'password'} value={password1} onChange={(e)=>setPassword1(e.target.value)}></input>
        <input type={'password'} value={password2} onChange={(e)=>setPassword2(e.target.value)}></input>
        <input type={'password'} value={oldpassword} onChange={(e)=>setOldpassword(e.target.value)}></input>
        

        <button onClick={handleclick}>Change Password</button>
    </div>
  )
}

export default Change