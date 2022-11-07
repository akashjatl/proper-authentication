import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
const authoj={
  "username": "",
  "email": "",
  "password": ""
}

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errmsg, seterrormsg] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const user = {
      username:username,
      email: "",
      password: password
    };

    fetch('http://127.0.0.1:8000/account/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          console.log(data.key)
          // window.location.replace('http://localhost:3000/dashboard');
        } else {
          // setEmail('');
          // setPassword('');
          // localStorage.clear();
          // setErrors(true);
        }
      });
  };

    // await axios
    //   .post("http://127.0.0.1:8000/account/login/", {
    //     // username: { username },
    //     // email:"",
    //     // password: { password },
    //     authoj,
    //     headers: {
    //       "Content-Type": "application/json",
    //       // 'X-CSRFTOKEN': csrftoken
    //       // 'X-CSRFTOKEN': localStorage.getItem('token')
    //       // Authorization: `token ${localStorage.getItem('token')}`
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     window.localStorage.clear();
    //     window.localStorage.setItem("token", response.data);
    //     window.location.replace("http://localhost:3000/Dashboard");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     seterrormsg("Login failed");
    //   });
  
  useEffect(() => {
    if (window.localStorage.getItem("token") !== null)
      window.location.replace("http://localhost:3000/Dashboard");
  }, []);
  return (
    <form onSubmit={handlesubmit}>
      {errmsg && <p>{errmsg}</p>}
      <input value={username} type={'text'}
        onChange={(e) => setusername(e.target.value)}
        required
      ></input>
      <br></br>
      <input value={password} type={'password'}
        onChange={(e) => setpassword(e.target.value)}
        required
      ></input>
      <br></br>
      <button>Login</button>
    </form>
  );
};

export default Login;
