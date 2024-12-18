import React from "react";
import MyImage from "../assets/images/user.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        //border: "2px solid black",
        backgroundColor: "#ced6e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
        boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
      }}
    >
      <div>
        <img src={MyImage} alt="" />
      </div>
      <h2>Welcome To The Food Receipes </h2>
      <div style={{}}>
        <button
          style={{
            border: "1px solid gray",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          <Link to={"/"}>Logout</Link>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
