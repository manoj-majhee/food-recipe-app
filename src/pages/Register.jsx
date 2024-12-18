import React from "react";
import myImage2 from "../assets/images/chocolate.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    setName("");
    setEmail("");
    setPassword("");
  };

  const onnamechangeHandler = (event) => {
    setName(event.target.value);
  };

  const onemailchangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const onpasswordchangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const registerHandler = async () => {
    try {
      const { data } = await axios.post(
        "https://nodejs-auth-black.vercel.app/api/auth/register",
        { username: name, email, password }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }

    // console.log(data);
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
      onSubmit={submitHandler}
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
          <h2>Registration Form</h2>

          <div style={{}}>
            <TextField
              id="outlined-disabled"
              label="Full Name"
              placeholder="Enter your name"
              style={{ width: "250px" }}
              value={name}
              onChange={onnamechangeHandler}
            />
          </div>

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
            Already a member?{" "}
            <Link to="/" style={{ color: "blue" }}>
              Login
            </Link>
          </p>
          <Button
            variant="contained"
            disableElevation
            style={{ width: "150px" }}
            onClick={registerHandler}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
}
export default Register;
