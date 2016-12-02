import React from 'react';

export const IngredientInput = props => (
  <div>
    <span>{props.ingredient}:</span>
    <input
      className="ingredient ingredient-name"
      id={`${props.ingredient}-ingredients`}
      type="text" placeholder="Ingredient"
      onChange={props.handleChange}
    />
    <input
      className="ingredient ingredient-quantity"
      id={`${props.ingredient}-ingredients-count`}
      type="text" placeholder="Quantity"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyPress}
    />
  </div>
);

IngredientInput.propTypes = {
  ingredient: React.PropTypes.number,
  handleChange: React.PropTypes.func,
  handleKeyPress: React.PropTypes.func,
};
