import React, { useEffect } from "react";
import { useState } from "react";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailid, setEmail] = useState("");
  const [errmsg, setErrors] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
       email:emailid,
      password: password,
    };

    await fetch(`${process.env.REACT_APP_API_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.access_token) {
          console.log("Success:", data);
          localStorage.clear();
          localStorage.setItem("token", data.access_token);
          window.location.replace('http://localhost:3000/Dashboard')
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setUsername("");
        setPassword("");
        if (error.response === 400) setErrors("incorrect username or password");
        else if (error.response.status === 404)
          setErrors("Not found response code");
        else setErrors("Login Failed");
      });
  };

  useEffect(() => {
    if (window.localStorage.getItem("token") !== null)
      window.location.replace("http://localhost:3000/Dashboard");
  }, []);
  return (
    <form onSubmit={handlesubmit}>
      {errmsg && <p>{errmsg}</p>}
      <label>username</label>
      <input
        value={username}
        type={"text"}
        onChange={(e) => setUsername(e.target.value)}
        required
      ></input>
      <br></br>
      {/* <label>email</label>
      <input
        value={emailid}
        type={"text"}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <br></br> */}
      <label>password</label>
      <input
        value={password}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>
      <br></br>
      <button>Login</button>
    </form>
  );
};

export default Login;
