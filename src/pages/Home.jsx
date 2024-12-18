import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
function Home() {
  const carddetails = [
    "aaaaaaa",
    "bbbbb",
    "ccccc",
    "bbbbb",
    "ccccc",
    "bbbbb",
    "ccccc",
    "bbbbb",
    "ccccc",
  ];
  //let recipes;
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/recipes");
      setRecipes(data.recipes);
      //console.log(recipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div style={{ backgroundColor: "#dfe4ea" }}>
      <Navbar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "35px",
          marginTop: "30px",
        }}
      >
        {recipes?.map((element) => (
          <Card name={element.name} image={element.image} key={element.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
