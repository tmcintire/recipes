import React from 'react';

export const RecipeItem = props => (
  <div className="recipe-listing">
    <p>{props.recipeName}</p>
    <p>Cook Time: {props.cookTime}</p>
    <p>Prep Time: {props.prepTime}</p>
  </div>
);
