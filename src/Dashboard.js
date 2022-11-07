import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [name, setname] = useState("");
  const [img, setimage] = useState("");
  useEffect(() => {
    if (window.localStorage.getItem("token") === null) {
      window.location.replace("http://localhost:3000/Login");
    }

    (async () => {
      console.log("enetered");
      const user = {
        access_token: localStorage.getItem("token"),
      };
      await fetch(`${process.env.REACT_APP_API_URL}user/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json)
        .then((data) => {
          console.log("Success:", data);
          //  setname(data)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })();
  }, []);
  return (
    <div>
      Hi I am an Idiot{name}
      {/* <img src={img} alt=''/> */}
    </div>
  );
};

export default Dashboard;
