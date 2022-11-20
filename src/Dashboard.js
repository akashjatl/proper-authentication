import axios from "axios";
import React, { useEffect, useState } from "react";
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
const Dashboard = () => {
  const [name, setname] = useState("");
  const [img, setimage] = useState("");
  console.log(localStorage.getItem("token"))
  useEffect(() => {
    if (window.localStorage.getItem("token") === null) {
      window.location.replace("http://localhost:3000/Login");
    }

    (async () => {
      const user = {
        access_token: localStorage.getItem("token"),
      };
      await fetch(`${process.env.REACT_APP_API_URL}user/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          // "X-CSRFToken": localStorage.getItem('token'),
          // "X-CSRFToken": csrftoken
        },
        //  body: JSON.stringify(user),
      })
        .then((res) => 
        res.json())
        .then((data) => {
          console.log("Success:", data);

            setname(data.detail)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })();
  }, []);
  return (
    <div>
      Hi I am an authentication system{name}
      {/* <img src={img} alt=''/> */}
    </div>
  );
};

export default Dashboard;
