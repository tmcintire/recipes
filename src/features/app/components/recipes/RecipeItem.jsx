import React from 'react';

export const RecipeItem = props => (
  <div className="recipe-listing">
    <p className="recipe-detail">{props.recipeName}</p>
    <p className="recipe-detail">Cook Time: {props.cookTime}</p>
    <p className="recipe-detail">Prep Time: {props.prepTime}</p>
  </div>
);
