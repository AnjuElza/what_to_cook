import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AppNavbar} from "./AppNavbar"; 
import "./css/RecipieList.css"; 
// export function RecipieList() {
//     const { mainIngredient } = useParams(); // Extract ingredient from URL
//     const API=`www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`;
//     console.log(API);
//     const [recipeList, setRecipeList] = useState([]);
//     const getRecipe = () => {
//      fetch(`${API}`, {
//        method: "GET",
//      })
//      .then(res => {
//        if (!res.ok) {
//          throw new Error(`Error fetching recipe: ${res.status} - ${res.statusText}`);
//        }
//        return res.json();
//      })
//      .then((r) => setRecipeList(r))
//      .catch(error => console.error(error)); // Log any fetch errors
//    }
 
//    useEffect(() => getRecipe(), [])
   
//     return (
//       <div>
//         <h1>Recipe List for {mainIngredient}</h1>
//         {/* You can display the recipe list here */}
//       </div>
//     );
//   }


export function RecipieList() {
  const { mainIngredient } = useParams(); // Extract ingredient from URL
  const navigate = useNavigate();
  const API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`;
   console.log(API);
  const [recipeList, setRecipeList] = useState([]);
  // const [recipeDetails, setRecipeDetails] = useState([]);
  const [error, setError] = useState(null);

  const getRecipe = () => {
    fetch(API)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching recipe: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.meals === null) {
          setError("No recipe available for this ingredient.");
        } else {
          setRecipeList(data.meals);
        }
      })
      .catch((error) => {
        setError("Error fetching recipe data.");
        console.error(error);
      });
  };

  const getDetailedRecipe = (idMeal) => {
    navigate(`/recipieList/${mainIngredient}/${idMeal}` )
  };

  useEffect(() => {
    getRecipe();
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div>
      <AppNavbar />
      <h1>Recipe List for {mainIngredient}</h1>
      {error ? (
        <div>
          <p>{error}</p>
          <Button onClick={() => navigate("/")}>Go to Home</Button>
        </div>
      ) : (
      <div className="recipe-list">
      {recipeList.map((recipe) => (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.strMealThumb} style={{ width: '18rem', height:'20rem'}}/>
      <Card.Body>
        <Card.Title>{recipe.strMeal}</Card.Title>
        <Button 
          variant="primary"
          onClick={() => getDetailedRecipe(recipe.idMeal)} 
          >Recipe
        </Button>
      </Card.Body>
    </Card>
    ))}
    </div>
    )}

    </div>
  );
}

