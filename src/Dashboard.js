import axios, { AxiosHeaders } from "axios";
import React, { useEffect, useState } from "react";

var token;
const Dashboard = () => {
  const [name, setname] = useState("");
  const [img, setimage] = useState("");
  console.log(localStorage.getItem("token"));
  useEffect(() => {
    // if (window.localStorage.getItem("token") === null) {
    //   window.location.replace("http://localhost:3000/Login");
    // }
    // else{  
    //   token = localStorage.getItem("token");
    //   console.log("token is "+ token);
    // }

    (async () => {
      const user = {
        access_token: localStorage.getItem("token"),
        // token=localStorage.getItem("token"),
      };
      // await fetch(`${process.env.REACT_APP_API_URL}user/`, {
      //   method: "GET",
      //   headers: {
      //     "Content-type": "application/json",
      //     // "X-CSRFToken": localStorage.getItem('token'),
      //     // "X-CSRFToken": csrftoken
      //   },
      //   //  body: JSON.stringify(user),
      // })
      axios
        .get(`http://127.0.0.1:8000/account/user`, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4OTI1MDIzLCJpYXQiOjE2Njg5MjQ3MjMsImp0aSI6IjhjNTg2MWViZGVhMjQzMzY4ZDNkMjAyNzZlOGFlZDM4IiwidXNlcl9pZCI6MX0.N_dcP_0gkgbz4NyPtOqEq2m8Z8gai3-TMSjyKiceTFU`,
            
          },
        })
        // .then((res) => res.json())
        .then((data) => {
          console.log("Success:", data);

          setname(data.detail);
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
