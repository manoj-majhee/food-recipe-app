import React from "react";
import myImage from "../assets/images/user.png";
import myImage2 from "../assets/images/chocolate.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function Register() {
  return (
    <div
      style={{
        backgroundColor: "#7ed6df",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          border: "1px solid black",
          backgroundColor: "white",
          // height: "200px",
          display: "flex",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{ backgroundColor: "#dfe4ea", width: "100%", display: "flex" }}
        >
          <img
            src={myImage2}
            style={{ height: "100%", width: "100%" }}
            alt=""
          />
        </div>
        <div
          style={{
            backgroundColor: "blue",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "50px 0",
            gap: "20px",
          }}
        >
          <h2>Registration Form</h2>

          <div style={{}}>
            <TextField
              id="outlined-disabled"
              label="Full Name"
              placeholder="Enter your name"
              style={{ width: "250px" }}
            />
          </div>

          <div>
            <TextField
              id="outlined-disabled"
              label="Email"
              placeholder="Enter your Email"
              style={{ width: "250px" }}
            />
          </div>

          <div>
            <TextField
              id="outlined-disabled"
              label="Password"
              placeholder="Enter your password"
              style={{ width: "250px" }}
            />
          </div>
          <p>
            Already a member?{" "}
            <a href="Google.com" style={{ color: "blue" }}>
              Login
            </a>
          </p>
          <Button
            variant="contained"
            disableElevation
            style={{ width: "150px" }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Register;
