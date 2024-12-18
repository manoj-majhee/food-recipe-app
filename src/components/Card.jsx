import React from "react";
import Chocolate from "../assets/images/chocolate.jpg";
import { Directions } from "@mui/icons-material";

function Card(props) {
  return (
    <div
      style={{
        border: "2px solid #a4b0be",
        borderRadius: "12px",
        padding: "4px",
        width: "300px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <img
        src={props.image}
        alt=""
        style={{ display: "block", height: "300px", borderRadius: "8px" }}
      />

      <div>
        <h3 style={{ textAlign: "center", color: "green" }}>{props.name}</h3>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex
          magni alias! Modi laborum nemo minus enim rerum voluptatem incidunt,
        </p> */}
      </div>
    </div>
  );
}
export default Card;
