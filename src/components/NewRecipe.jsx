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
  }

  return (
  <h1>Feed the Feed!</h1>
  )
}


// t.string "ingredients"
// t.string "cuisine"
// t.string "prep_time"
// t.string "cook_time"
// t.integer "serves"
// t.string "photo"