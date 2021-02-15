import React, { useState, useEffect } from "react";

export function NewRecipe({ history }) {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [prep_time, setPreptime] = useState("");
  const [cook_time, setCooktime] = useState("");
  const [serves, setServes] = useState("");
  const [photo, setPhoto] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/recipes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            recipe: { ingredients, cuisine, prep_time, cook_time, serves, photo },
          }),
        }
      );
      history.push('/');
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h1>Feed the Feed!</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <input 
            type="text"
            name="ingredients"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            />
            <label htmlFor="cuisine">Cuisine:</label>
          <input 
            type="text"
            name="cuisine"
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            />
            <label htmlFor="prep_time">Prep time:</label>
          <input 
            type="text"
            name="prep_time"
            id="prep_time"
            value={prep_time}
            onChange={(e) => setPreptime(e.target.value)}
            />
            <label htmlFor="cook_time">Cook time:</label>
          <input 
            type="text"
            name="cook_time"
            id="cook_time"
            value={cook_time}
            onChange={(e) => setCooktime(e.target.value)}
            />
            <label htmlFor="serves">Serves:</label>
          <input 
            type="text"
            name="serves"
            id="serves"
            value={serves}
            onChange={(e) => setServes(e.target.value)}
            />
            <label htmlFor="photo">Photo:</label>
          <input 
            type="text"
            name="photo"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            />
          <button type="submit" value="submit"></button>
        </div>
      </form>
    </>
  )
}


