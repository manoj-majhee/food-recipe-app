import React, { useEffect, useState } from "react";
import Choco from "../assets/images/chocolate.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
function RecipeDetails() {
  const { id } = useParams();
  useEffect(() => {
    fetchRecipeDetails(id);
  }, []);

  const [detail, setDetail] = useState({});
  const fetchRecipeDetails = async (id) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setDetail(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#dfe4ea",
        padding: "30px 0",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          width: "50%",
          margin: " auto",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxHeight: "400px",
            overflow: "hidden",
          }}
        >
          <img
            src={detail.image}
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ backgroundColor: "#b2bec3", margin: "15px 0" }}>
          <h1 style={{ textAlign: "center", color: "#cc8e35" }}>
            {detail.name}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            borderTop: "2px solid #cc8e35",
            borderBottom: "2px solid #cc8e35",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              <b>Prep Time</b>
            </span>
            <span>{detail.prepTimeMinutes}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              <b>Cook Time</b>
            </span>
            <span>{detail.cookTimeMinutes}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              <b>Servings</b>
            </span>
            <span>{detail.servings}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              <b>Meal type</b>
            </span>
            <span>{detail.mealType}</span>
          </div>
        </div>
        <div style={{ padding: "10px " }}>
          <p>{detail.instructions}</p>
          <div style={{ marginTop: "10px" }}>
            <span>
              <b>Recipe Rating : </b>
            </span>
            <span> {detail.rating}/5 </span>
            <br />
            <span>
              <b>{detail.reviewCount}</b> ratings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecipeDetails;
