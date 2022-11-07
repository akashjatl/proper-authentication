import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [authentication,setauthentication]=useState(false)
    useEffect(()=>{
      localStorage.clear();
        if(window.localStorage.getItem('token')!==null)
        setauthentication(true)
    },[])
  return (
   
        
            authentication ?(<> <Link to="/Dashboard">Dashboard</Link><br></br>
            <Link to='/Logout'>Logout</Link></>):(<><Link to='/Login'>Login</Link><br></br>
            <Link to='Signup'>Signup</Link></>)
  )
    
}

export default Home