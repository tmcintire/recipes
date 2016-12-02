import React from 'react';

export const RecipeItem = props => (
  <div>
    <p>{props.recipeName}</p>
    <p>Cook Time: {props.cookTime}</p>
    <p>Prep Time: {props.prepTime}</p>
  </div>
);
