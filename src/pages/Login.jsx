import React from "react";
import myImage2 from "../assets/images/chocolate.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onsubmitHandler = (event) => {
    event.preventDefault();
  };

  const onemailchangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onpasswordchangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = async () => {
    const { data } = await axios.post(
      "https://nodejs-auth-black.vercel.app/api/auth/login",
      { email, password }
    );
    console.log();
    toast.success(data.message);
    setEmail("");
    setPassword("");
    navigate("/home");
  };
  return (
    <form
      style={{
        backgroundColor: "#7ed6df",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={onsubmitHandler}
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
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "50px 0",
            gap: "20px",
          }}
        >
          <h2>Login Here</h2>

          <div>
            <TextField
              id="outlined-disabled"
              label="Email"
              placeholder="Enter your Email"
              style={{ width: "250px" }}
              value={email}
              onChange={onemailchangeHandler}
            />
          </div>

          <div>
            <TextField
              id="outlined-disabled"
              label="Password"
              placeholder="Enter your password"
              style={{ width: "250px" }}
              value={password}
              onChange={onpasswordchangeHandler}
            />
          </div>
          <p>
            Don't have Account{" "}
            <Link to="/register" style={{ color: "blue" }}>
              Sign Up
            </Link>
          </p>
          <Button
            variant="contained"
            disableElevation
            style={{ width: "150px" }}
            onClick={loginHandler}
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}
export default Login;
