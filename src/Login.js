import React, { useEffect } from "react";
import { useState } from "react";
const Login = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrors] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: "",
      password: password,
    };

    await fetch(`${process.env.REACT_APP_API_URL}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'X-CSRFToken': localStorage.getItem('token')
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.key) {
          console.log("Success:", data);
          localStorage.clear();
          localStorage.setItem("token", data.key);
          window.location.replace('http://localhost:3000/Dashboard')
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setEmail("");
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
      <input
        value={username}
        type={"text"}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <br></br>
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
