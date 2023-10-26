import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import {AppNavbar} from "./AppNavbar"; 
import "./css/RecipieDetail.css"; 

export function RecipieDetail() {
    const {idMeal } = useParams(); // Extract ingredient from URL
    const navigate = useNavigate();
    const API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(API);
   // const [recipeList, setRecipeList] = useState([]);
     const [recipeDetails, setRecipeDetails] = useState([]);
  
    const getDetailedRecipe = () => {
        fetch(API)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error fetching recipe details: ${res.status} - ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => setRecipeDetails(data.meals[0])) // Assuming data.meals contains the recipe list
        .catch((error) => console.error(error)); // Log any fetch errors
    };
  
    useEffect(() => {
        getDetailedRecipe();
    }, []); // Empty dependency array ensures the effect runs once
  
    return (
      <div>
       <AppNavbar />
        <div className="recipe-detail">
        <Card >
        <Card.Img variant="top" src={recipeDetails.strMealThumb} style={{  height:'20rem'}}/>
        <Card.Body>
          <Card.Title>{recipeDetails.strMeal}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Category: {recipeDetails.strCategory}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Area: {recipeDetails.strArea}</Card.Subtitle>
          
          <Card.Text>
            {recipeDetails.strInstructions}
          </Card.Text>
          <Card.Link href={recipeDetails.strYoutube} target="_blank">Watch Video Recipe</Card.Link>
        </Card.Body>
      </Card>
    
      </div>
      </div>
    );
  }
  
//   "idMeal": "52772",
// "strMeal": "Teriyaki Chicken Casserole",
// "strDrinkAlternate": null,
// "strCategory": "Chicken",
// "strArea": "Japanese",
// "strInstructions": "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray. Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling. Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat. Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks. *Meanwhile, steam or cook the vegetables according to package directions. Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
// "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
// "strTags": "Meat,Casserole",
// "strYoutube": "https://www.youtube.com/watch?v=4aZr5hZXP_s",