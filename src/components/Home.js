import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import heading_image from '../images/main_page_image.jpg';
import {AppNavbar} from "./AppNavbar"; 
import "./css/Home.css";

export function Home(){
const [mainIngredient, setMainIngredient] = useState('');
const navigate = useNavigate();
const handleButtonClick = () => {
  if (mainIngredient.trim() === '') {
    // Display an alert if mainIngredient is empty or contains only whitespace
    alert('Enter an ingredient name to search');
  } else {
    navigate(`/recipeList/${mainIngredient}`);
  }
};
  return (
    <div className="App">
     
      <AppNavbar />
      <div className="main_container">
      <div className="search_area_container">
        <p>Confused about what to make with the ingredients in your kitchen?
        <br></br>Search for mouth-watering recipies here..</p>
        <div className="search_bar_container">
        <div className='search_bar'>
        <Form className="custom-form">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="form-label">Enter the main ingredient</Form.Label>
    <Form.Control
      className="form-input"
      size="lg"
      type="text"
      placeholder="Example: chicken"
      value={mainIngredient}
      onChange={(e) => setMainIngredient(e.target.value)}
    />
  </Form.Group>
  <Button className="custom-button" onClick={handleButtonClick}>
    Search
  </Button>
</Form>

        </div>
        </div>
        </div>
        <div className="image_container">
        <img className='image' src={heading_image} alt="food_image" />
      </div>
      </div>
    </div>
  );
}