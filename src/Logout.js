import React, { useEffect } from "react";
import axios from "axios";
const Logout = () => {
  useEffect(() => {
    if (window.localStorage.getItem("token") === null)
      window.location.replace("http://localhost:3000/Login");
  }, []);
  const handleclick = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.clear();
        window.location.replace("http://localhost:3000/Login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <p>Are you sure you want to Logout</p>
      <button onClick={handleclick}>Logout</button>
    </div>
  );
};

export default Logout;
