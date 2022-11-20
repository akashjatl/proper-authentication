import React, { useEffect } from "react";
import { useState } from "react";

function getCookie(name) {
  let cookieValue = null;

  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

        break;
      }
    }
  }

  return cookieValue;
}
const csrftoken = getCookie("csrftoken");

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

    await fetch(`${process.env.REACT_APP_API_URL}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'X-CSRFToken': csrftoken,
        // withCredentials: true
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.key) {
          console.log("Success:", data);
          localStorage.clear();
          localStorage.setItem("token", data.key);
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
      <label>email</label>
      <input
        value={emailid}
        type={"text"}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <br></br>
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
