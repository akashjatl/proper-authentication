import axios, { AxiosHeaders } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
var token;
const Dashboard = () => {
  const [name, setname] = useState("");
  const [img, setimage] = useState("");
  console.log(localStorage.getItem("token"));
  useEffect(() => {

    (async () => {
      const user = {
        access_token: localStorage.getItem("token"),
      
      };
      axios
        .get(`${process.env.REACT_APP_API_URL}/user`, {
          headers: {
            "Content-type": "application/json",
            Authorization:`Bearer ${window.localStorage.getItem("token")}`,
            
          },
        })
       
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
      <Link to='/Logout'>Logout</Link>
      <Link to='/Change'>Change Password</Link>
     
      
      {/* <img src={img} alt=''/> */}
    </div>
  );
};

export default Dashboard;
